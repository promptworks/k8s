import * as k8s from "kubernetes-client";
import { Pod } from "./types/pod";
import { Namespace } from "./types/namespace";
import { getList, getBody } from "./helpers";

interface Options {
  kubeconfig?: string;
  context?: string;
  namespace?: string;
}

export class Kubernetes {
  private client: k8s.ApiRoot;
  private namespace: k8s.ApiV1NamespacesName;

  public constructor({
    kubeconfig,
    context,
    namespace = "default"
  }: Options = {}) {
    this.client = new k8s.Client1_10({
      config: k8s.config.fromKubeconfig(kubeconfig, context)
    });

    this.namespace = this.client.api.v1.namespaces(namespace);
  }

  /**
   * Namespaces
   */

  public listNamespaces(): Promise<Namespace[]> {
    return getList(this.client.api.v1.namespaces.get());
  }

  public async getNamespace(name: string): Promise<Namespace> {
    return getBody(this.client.api.v1.namespaces(name).get());
  }

  /**
   * Pods
   */

  public async listPods(): Promise<Pod[]> {
    return getList(this.namespace.pods.get());
  }

  public async getPod(name: string): Promise<Pod> {
    return getBody(this.namespace.pods(name).get());
  }
}
