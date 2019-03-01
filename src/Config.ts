import * as k8s from "kubernetes-client";

export interface Options {
  namespace?: string;
  kubeconfig?: string;
  context?: string;
}

const toFlags = (options: object) => {
  return Object.entries(options).reduce(
    (flags, [key, value]) => (value ? flags.concat(`--${key}`, value) : flags),
    [] as string[]
  );
};

export class Config {
  public readonly namespace: string;
  public readonly client: k8s.ApiRoot;
  public readonly flags: string[];

  public constructor({
    kubeconfig,
    context,
    namespace = "default"
  }: Options = {}) {
    this.namespace = namespace;

    this.flags = toFlags({
      namespace,
      context,
      kubeconfig
    });

    this.client = new k8s.Client1_10({
      config: k8s.config.fromKubeconfig(kubeconfig, context)
    });
  }
}
