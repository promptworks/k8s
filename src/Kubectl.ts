import * as execa from "execa";

const toFlags = (options: object) => {
  return Object.entries(options).reduce(
    (flags, [key, value]) => (value ? flags.concat(`--${key}`, value) : flags),
    [] as string[]
  );
};

export class Kubectl {
  private flags: string[];

  public constructor(options: object = {}) {
    this.flags = toFlags(options);
  }

  public run(args: string[], opts: execa.Options = {}) {
    return execa("kubectl", this.flags.concat(args), opts);
  }
}
