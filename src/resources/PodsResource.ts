import { Pod } from "../types";
import { ApiV1NamespacesNamePods } from "kubernetes-client";
import { Resource } from "./Resource";
import { Stream } from "stream";
import { getBody } from "../helpers";
import * as execa from "execa";

export interface LogOptions {
  container?: string;
}

export interface ExecOptions {
  command?: string[];
  container?: string;
  stderr?: boolean;
  stdout?: boolean;
}

export interface AttachOptions {
  container?: string;
  stderr?: Stream;
  stdin?: Stream;
  stdout?: Stream;
  tty?: boolean;
}

export interface ConnectOptions extends AttachOptions {
  command?: string[];
}

export class PodsResource extends Resource<Pod, ApiV1NamespacesNamePods> {
  /**
   * Get the logs from a container, and return them as a string.
   */
  public getLogs(name: string, opts: LogOptions = {}): Promise<string> {
    return getBody(this.api(name).log.get({ qs: opts }));
  }

  /**
   * Get a log stream from a running container.
   */
  public followLogs(name: string, opts: LogOptions = {}): Stream {
    return this.api(name).log.getStream({
      qs: { ...opts, follow: true }
    });
  }

  /**
   * Run a single command and return the output as a string.
   */
  public async exec(name: string, opts: ExecOptions): Promise<string> {
    return getBody(this.api(name).exec.post({ qs: opts }));
  }

  /**
   * Attach to a running container.
   */
  public async attach(name: string, opts: AttachOptions): Promise<void> {
    const flags: string[] = ["attach", name, ...this.config.getFlags()];

    if (opts.stdin) flags.push("--stdin");
    if (opts.tty) flags.push("--tty");
    if (opts.container) flags.push("--container", opts.container);

    await execa("kubectl", flags, {
      stdin: opts.stdin,
      stdout: opts.stdout,
      stderr: opts.stderr
    });
  }

  /**
   * Establish an interactive `exec` session with a running container.
   */
  public async connect(pod: string, opts: ConnectOptions): Promise<void> {
    const flags: string[] = ["exec", pod, ...this.config.getFlags()];

    if (opts.stdin) flags.push("--stdin");
    if (opts.tty) flags.push("--tty");
    if (opts.container) flags.push("--container", opts.container);
    if (opts.command) flags.push("--", ...opts.command);

    await execa("kubectl", flags, {
      stdin: opts.stdin,
      stdout: opts.stdout,
      stderr: opts.stderr
    });
  }
}
