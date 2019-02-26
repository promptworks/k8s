import * as WebSocket from "ws";

const STDOUT_CHANNEL = 1;
const STDERR_CHANNEL = 2;
const ERROR_CHANNEL = 3;

const encodeMessage = (data: Buffer): Buffer => {
  const buffer = Buffer.alloc(data.length + 1);
  buffer.writeInt8(0, 0);
  data.copy(buffer, 1);
  return buffer;
};

const decodeMessage = (data: Buffer): [number, Buffer] => {
  return [data.readInt8(0), data.slice(1)];
};

export interface StdioOptions {
  stdin?: NodeJS.ReadableStream;
  stdout?: NodeJS.WritableStream;
  stderr?: NodeJS.WritableStream;
}

export const createStdio = (
  ws: WebSocket,
  { stdin, stderr, stdout }: StdioOptions
): Promise<void> => {
  ws.on("message", (data: Buffer) => {
    const [channel, message] = decodeMessage(data);

    if (stdout && channel === STDOUT_CHANNEL) {
      stdout.write(message);
    }

    if (stderr && channel === STDERR_CHANNEL) {
      stderr.write(message);
    }

    if (channel === ERROR_CHANNEL) {
      if (stdout && stdout !== process.stdout) {
        stdout.end();
      }

      if (stderr && stderr !== process.stderr) {
        stderr.end();
      }
    }
  });

  if (stdin) {
    stdin.on("data", input => ws.send(encodeMessage(input)));
    stdin.on("close", () => ws.close());
  }

  return new Promise((resolve, reject) => {
    let resolved = false;

    ws.on("error", error => {
      if (!resolved) {
        reject(error);
      }
    });

    ws.on("close", () => {
      resolved = true;
      resolve();
    });
  });
};
