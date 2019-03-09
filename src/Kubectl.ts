import * as execa from "execa";
import { AnyObject, AttachOptions, ConnectOptions, Flags } from "./types";

const toFlags = (options: Flags) => {
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
  private shell = execa;

  public constructor(options: Flags = {}) {
    this.flags = toFlags(options);
  }

  /**
   * Run an arbitrary shell command.
   */
  public kubectl(
    args: string[],
    opts: execa.Options = {}
  ): execa.ExecaChildProcess {
    return this.shell("kubectl", this.flags.concat(args), opts);
  }

  /**
   * Apply a configuration to a resource.
   */
  public apply(
    objects: AnyObject[],
    opts: execa.Options = {}
  ): execa.ExecaChildProcess {
    return this.kubectl(["apply", "-f", "-"], {
      input: objects.map(toJSON).join("\n"),
      ...opts
    });
  }

  /**
   * Attach to a running container.
   */
  public attach(
    pod: string,
    opts: AttachOptions & execa.Options = {}
  ): execa.ExecaChildProcess {
    const flags = toFlags({
      tty: opts.tty,
      container: opts.container,
      stdin: Boolean(opts.stdin)
    });

    return this.kubectl(["attach", pod, ...flags], opts);
  }

  /**
   * Establish an interactive `exec` session with a running container.
   */
  public connect(
    pod: string,
    opts: ConnectOptions & execa.Options = {}
  ): execa.ExecaChildProcess {
    const command = opts.command ? ["--", ...opts.command] : [];
    const flags = toFlags({
      tty: opts.tty,
      container: opts.container,
      stdin: Boolean(opts.stdin)
    });

    return this.kubectl(["exec", pod, ...flags, ...command], opts);
  }
}
