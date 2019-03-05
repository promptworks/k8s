import * as k8s from "kubernetes-client";
import {
  Namespace,
  Deployment,
  Secret,
  ConfigMap,
  Ingress,
  Service,
  AnyObject,
  DaemonSet,
  ReplicaSet,
  Job,
  HorizontalPodAutoscaler,
  PersistentVolumeClaim,
  CronJob
} from "./types";
import { Resource } from "./resources/Resource";
import { PodsResource } from "./resources/PodsResource";
import { Kubectl } from "./Kubectl";

const toJSON = (input: any) => {
  return JSON.stringify(input);
};

export interface Options {
  namespace?: string;
  kubeconfig?: string;
  context?: string;
}

export class Kubernetes {
  public readonly namespace: string;

  private readonly client: k8s.ApiRoot;
  private readonly kubectl: Kubectl;

  public constructor({
    kubeconfig,
    context,
    namespace = "default"
  }: Options = {}) {
    this.namespace = namespace;

    this.kubectl = new Kubectl({
      namespace,
      context,
      kubeconfig
    });

    this.client = new k8s.Client1_10({
      config: k8s.config.fromKubeconfig(kubeconfig, context)
    });
  }

  public get namespaces(): Resource<Namespace> {
    return new Resource(this.client.api.v1.namespaces);
  }

  public get configMaps(): Resource<ConfigMap> {
    return new Resource(this.v1.configmaps);
  }

  public get deployments(): Resource<Deployment> {
    return new Resource(this.v1apps.deployments);
  }

  public get ingresses(): Resource<Ingress> {
    return new Resource(this.v1beta1extensions.ingresses);
  }

  public get pods(): PodsResource {
    return new PodsResource(this.v1.pods, this.kubectl);
  }

  public get secrets(): Resource<Secret> {
    return new Resource(this.v1.secrets);
  }

  public get services(): Resource<Service> {
    return new Resource(this.v1.services);
  }

  public get daemonSets(): Resource<DaemonSet> {
    return new Resource(this.v1apps.daemonsets);
  }

  public get replicaSets(): Resource<ReplicaSet> {
    return new Resource(this.v1apps.replicasets);
  }

  public get jobs(): Resource<Job> {
    return new Resource(this.v1batch.jobs);
  }

  public get cronJobs(): Resource<CronJob> {
    return new Resource(this.v1beta1batch.cronjobs);
  }

  public get horizontalPodAutoscalers(): Resource<HorizontalPodAutoscaler> {
    return new Resource(this.v1autoscaling.horizontalpodautoscalers);
  }

  public get persistentVolumeClaims(): Resource<PersistentVolumeClaim> {
    return new Resource(this.v1.persistentvolumeclaim);
  }

  public async apply(objects: AnyObject[]): Promise<void> {
    await this.kubectl.run(["apply", "-f", "-"], {
      input: objects.map(toJSON).join("\n")
    });
  }

  private get v1() {
    return this.client.api.v1.ns(this.namespace);
  }

  private get v1apps() {
    return this.client.apis.apps.v1.ns(this.namespace);
  }

  private get v1batch() {
    return this.client.apis.batch.v1.ns(this.namespace);
  }

  private get v1beta1batch() {
    return this.client.apis.batch.v1beta1.ns(this.namespace);
  }

  private get v1autoscaling() {
    return this.client.apis.autoscaling.v1.ns(this.namespace);
  }

  private get v1beta1extensions() {
    return this.client.apis.extensions.v1beta1.ns(this.namespace);
  }
}
