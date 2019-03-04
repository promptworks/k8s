import { Config } from "./Config";
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
import * as execa from "execa";
import { Resource } from "./resources/Resource";
import { PodsResource } from "./resources/PodsResource";

const toJSON = (input: any) => {
  return JSON.stringify(input);
};

export class Kubernetes {
  private readonly config: Config;
  private readonly shell = execa;

  public constructor(config = new Config()) {
    this.config = config;
  }

  public get namespaces(): Resource<Namespace> {
    return new Resource(this.config, this.config.client.api.v1.namespaces);
  }

  public get configMaps(): Resource<ConfigMap> {
    return new Resource(this.config, this.v1.configmaps);
  }

  public get deployments(): Resource<Deployment> {
    return new Resource(this.config, this.v1apps.deployments);
  }

  public get ingresses(): Resource<Ingress> {
    return new Resource(this.config, this.v1beta1extensions.ingresses);
  }

  public get pods(): PodsResource {
    return new PodsResource(this.config, this.v1.pods);
  }

  public get secrets(): Resource<Secret> {
    return new Resource(this.config, this.v1.secrets);
  }

  public get services(): Resource<Service> {
    return new Resource(this.config, this.v1.services);
  }

  public get daemonSets(): Resource<DaemonSet> {
    return new Resource(this.config, this.v1apps.daemonsets);
  }

  public get replicaSets(): Resource<ReplicaSet> {
    return new Resource(this.config, this.v1apps.replicasets);
  }

  public get jobs(): Resource<Job> {
    return new Resource(this.config, this.v1batch.jobs);
  }

  public get cronJobs(): Resource<CronJob> {
    return new Resource(this.config, this.v1beta1batch.cronjobs);
  }

  public get horizontalPodAutoscalers(): Resource<HorizontalPodAutoscaler> {
    return new Resource(
      this.config,
      this.v1autoscaling.horizontalpodautoscalers
    );
  }

  public get persistentVolumeClaims(): Resource<PersistentVolumeClaim> {
    return new Resource(this.config, this.v1.persistentvolumeclaim);
  }

  public async apply(objects: AnyObject[]): Promise<void> {
    const flags = ["apply", ...this.config.flags, "-f", "-"];
    const input = objects.map(toJSON).join("\n");
    await this.shell("kubectl", flags, { input });
  }

  private get v1() {
    return this.config.client.api.v1.ns(this.config.namespace);
  }

  private get v1apps() {
    return this.config.client.apis.apps.v1.ns(this.config.namespace);
  }

  private get v1batch() {
    return this.config.client.apis.batch.v1.ns(this.config.namespace);
  }

  private get v1beta1batch() {
    return this.config.client.apis.batch.v1beta1.ns(this.config.namespace);
  }

  private get v1autoscaling() {
    return this.config.client.apis.autoscaling.v1.ns(this.config.namespace);
  }

  private get v1beta1extensions() {
    return this.config.client.apis.extensions.v1beta1.ns(this.config.namespace);
  }
}
