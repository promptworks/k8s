import * as k8s from "kubernetes-client";
import { Pod } from "./types/pod";

interface Options {
  kubeconfig?: string;
  context?: string;
  namespace?: string;
}

export class Kubernetes {
  private namespace: string;
  private client: k8s.ApiRoot;

  public constructor({
    kubeconfig,
    context,
    namespace = "default"
  }: Options = {}) {
    this.namespace = namespace;
    this.client = new k8s.Client1_10({
      config: k8s.config.fromKubeconfig(kubeconfig, context)
    });
  }

  public async listPods(): Promise<Pod[]> {
    const response = await this.v1.pods.get();
    return response.body.items;
  }

  private get v1() {
    return this.client.api.v1.namespaces(this.namespace);
  }
}
