import * as execa from "execa";
import { AnyObject, AttachOptions, ConnectOptions } from "./types";

const toFlags = (options: object) => {
  const reducer = (flags: string[], [key, value]: [string, any]) => {
    if (!value) {
      return flags;
    }

    if (typeof value === "string") {
      return flags.concat(`--${key}`, value);
    }

    if (typeof value === "boolean") {
      return flags.concat(`--${key}`);
    }

    throw new TypeError(`Invalid flag: ${key}`);
  };

  return Object.entries(options).reduce(reducer, []);
};

const toJSON = (input: any) => {
  return JSON.stringify(input);
};

export class Kubectl {
  private flags: string[];
  private exec = execa;

  public constructor(options: object = {}) {
    this.flags = toFlags(options);
  }

  public run(args: string[], opts: execa.Options = {}) {
    return this.exec("kubectl", this.flags.concat(args), opts);
  }

  /**
   * Apply a configuration to a resource.
   */
  public async apply(objects: AnyObject[]): Promise<void> {
    await this.run(["apply", "-f", "-"], {
      input: objects.map(toJSON).join("\n")
    });
  }

  /**
   * Attach to a running container.
   */
  public async attach(pod: string, opts: AttachOptions = {}): Promise<void> {
    const flags = toFlags({
      tty: opts.tty,
      container: opts.container,
      stdin: Boolean(opts.stdin)
    });

    await this.run(["attach", pod, ...flags], {
      stdin: opts.stdin,
      stdout: opts.stdout,
      stderr: opts.stderr
    });
  }

  /**
   * Establish an interactive `exec` session with a running container.
   */
  public async connect(pod: string, opts: ConnectOptions = {}): Promise<void> {
    const command = opts.command ? ["--", ...opts.command] : [];
    const flags = toFlags({
      stdin: Boolean(opts.stdin),
      tty: opts.tty,
      container: opts.container
    });

    await this.run(["exec", pod, ...flags, ...command], {
      stdin: opts.stdin,
      stdout: opts.stdout,
      stderr: opts.stderr
    });
  }
}
