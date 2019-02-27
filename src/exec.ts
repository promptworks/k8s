import * as WebSocket from "ws";
import * as k8s from "kubernetes-client";
import { stringify } from "querystring";

const STDOUT_CHANNEL = 1;
const STDERR_CHANNEL = 2;
const ERROR_CHANNEL = 3;

export interface ExecOptions {
  tty?: boolean;
  command?: string[];
  container?: string;
  stdin?: NodeJS.ReadableStream;
  stdout?: NodeJS.WritableStream;
  stderr?: NodeJS.WritableStream;
}

export interface ExecSocketOptions extends ExecOptions {
  pod: string;
  namespace: string;
  config: k8s.ClientConfiguration;
}

const encodeMessage = (data: Buffer): Buffer => {
  const buffer = Buffer.alloc(data.length + 1);
  buffer.writeInt8(0, 0);
  data.copy(buffer, 1);
  return buffer;
};

const decodeMessage = (data: Buffer): [number, Buffer] => {
  return [data.readInt8(0), data.slice(1)];
};

const handleOutput = (
  ws: WebSocket,
  stdout?: NodeJS.WritableStream,
  stderr?: NodeJS.WritableStream
) => {
  ws.on("message", (data: Buffer) => {
    const [channel, message] = decodeMessage(data);

    switch (channel) {
      case STDOUT_CHANNEL:
        if (stdout) stdout.write(message);
        break;
      case STDERR_CHANNEL:
      case ERROR_CHANNEL:
        if (stderr) stderr.write(message);
        break;
      default:
        throw new Error(`Unknown channel: ${channel}`);
    }
  });
};

const handleInput = (ws: WebSocket, stdin: NodeJS.ReadableStream): void => {
  stdin.on("data", input => {
    if (ws.readyState === ws.OPEN) {
      ws.send(encodeMessage(input));
    } else {
      console.warn("CONNECTION", ws.readyState);
    }
  });

  stdin.on("close", () => {
    ws.close();
  });
};

export const exec = async ({
  config,
  pod,
  namespace,
  tty = false,
  stdin,
  stdout,
  stderr,
  command,
  container
}: ExecSocketOptions): Promise<void> => {
  const querystring = stringify({
    tty,
    stdin: Boolean(stdin),
    stdout: Boolean(stdout),
    stderr: Boolean(stderr),
    container,
    command
  });

  const baseURL = config.url.replace(/\/$/, "");
  const path = `api/v1/namespaces/${namespace}/pods/${pod}/exec`;
  const url = `${baseURL}/${path}?${querystring}`;
  const ws = new WebSocket(url, "channel.k8s.io", config);

  handleOutput(ws, stdout, stderr);

  if (stdin) {
    handleInput(ws, stdin);
  }

  return new Promise((resolve, reject) => {
    ws.on("error", error => reject(error));
    ws.on("close", () => resolve());
  });
};
