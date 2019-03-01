import * as k8s from "kubernetes-client";

export interface Options {
  namespace?: string;
  kubeconfig?: string;
  context?: string;
}

export class Config {
  public kubeconfig?: string;
  public context?: string;
  public namespace: string;

  private _config: k8s.ClientConfiguration;

  public constructor({
    kubeconfig,
    context,
    namespace = "default"
  }: Options = {}) {
    this.kubeconfig = kubeconfig;
    this.context = context;
    this.namespace = namespace;
    this._config = k8s.config.fromKubeconfig(this.kubeconfig, this.context);
  }

  public getFlags() {
    const flags: string[] = ["--namespace", this.namespace];
    if (this.context) flags.push("--context", this.context);
    if (this.kubeconfig) flags.push("--kubeconfig", this.kubeconfig);
    return flags;
  }

  public buildClient() {
    return new k8s.Client1_10({ config: this._config });
  }
}
