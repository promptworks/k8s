import * as k8s from "kubernetes-client";
import { Pod } from "./types/pod";
import { Namespace } from "./types/namespace";
import { getList, getBody } from "./helpers";
import { Deployment } from "./types/deployment";
import { Secret } from "./types/secret";
import { Configmap } from "./types/configmap";
import { Ingress } from "./types/ingress";
import { Service } from "./types/service";

interface Options {
  kubeconfig?: string;
  context?: string;
  namespace?: string;
}

export class Kubernetes {
  private client: k8s.ApiRoot;
  private namespace: string;

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
    return getList(this.core.pods.get());
  }

  public async getPod(name: string): Promise<Pod> {
    return getBody(this.core.pods(name).get());
  }

  /**
   * Services
   */

  public async listServices(): Promise<Service> {
    return getList(this.core.services.get());
  }

  public async getService(name: string): Promise<Service> {
    return getBody(this.core.services(name).get());
  }

  /**
   * Secrets
   */

  public async listSecrets(): Promise<Secret[]> {
    return getList(this.core.secrets.get());
  }

  public async getSecret(name: string): Promise<Secret> {
    return getBody(this.core.secrets(name).get());
  }

  /**
   * Configmaps
   */

  public async listConfigmaps(): Promise<Configmap[]> {
    return getList(this.core.configmaps.get());
  }

  public async getConfigmap(name: string): Promise<Configmap> {
    return getBody(this.core.configmaps(name).get());
  }

  /**
   * Deployments
   */

  public async listDeployments(): Promise<Deployment[]> {
    return getList(this.apps.deployments.get());
  }

  public async getDeployment(name: string): Promise<Deployment> {
    return getBody(this.apps.deployments(name).get());
  }

  /**
   * Ingress
   */

  public async listIngresses(): Promise<Ingress[]> {
    return getList(this.extensions.ingresses.get());
  }

  public async getIngress(name: string): Promise<Ingress> {
    return getBody(this.extensions.ingresses(name).get());
  }

  /**
   * Helpers
   */

  private get core() {
    return this.client.api.v1.namespaces(this.namespace);
  }

  private get apps() {
    return this.client.apis.apps.v1.namespaces(this.namespace);
  }

  private get extensions() {
    return this.client.apis.extensions.v1beta1.namespaces(this.namespace);
  }
}
