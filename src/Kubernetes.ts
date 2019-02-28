import * as k8s from "kubernetes-client";
import { Config, Options } from "./Config";
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
  PersistentVolume
} from "./types";
import * as execa from "execa";
import { Resource } from "./resources/Resource";
import { PodsResource } from "./resources/PodsResource";

const toJSON = (input: any) => {
  return JSON.stringify(input);
};

export class Kubernetes {
  private client: k8s.ApiRoot;
  private config: Config;

  public constructor(options: Options = {}) {
    this.config = new Config(options);
    this.client = this.config.buildClient();
  }

  public get configMaps(): Resource<ConfigMap> {
    return new Resource(this.config, this.core.configmaps);
  }

  public get deployments(): Resource<Deployment> {
    return new Resource(this.config, this.apps.deployments);
  }

  public get ingresses(): Resource<Ingress> {
    return new Resource(this.config, this.extensions.ingresses);
  }

  public get namespaces(): Resource<Namespace> {
    return new Resource(this.config, this.client.api.v1.namespaces);
  }

  public get pods(): PodsResource {
    return new PodsResource(this.config, this.core.pods);
  }

  public get secrets(): Resource<Secret> {
    return new Resource(this.config, this.core.secrets);
  }

  public get services(): Resource<Service> {
    return new Resource(this.config, this.core.services);
  }

  public get daemonSets(): Resource<DaemonSet> {
    return new Resource(this.config, this.apps.daemonsets);
  }

  public get replicaSets(): Resource<ReplicaSet> {
    return new Resource(this.config, this.apps.replicasets);
  }

  public get jobs(): Resource<Job> {
    return new Resource(this.config, this.batch.jobs);
  }

  public get persistentVolumes(): Resource<PersistentVolume> {
    return new Resource(this.config, this.core.persistentvolumeclaim);
  }

  public async apply(objects: AnyObject[]): Promise<void> {
    const flags = ["apply", "-f", "-", ...this.config.getFlags()];
    const input = objects.map(toJSON).join("\n");
    await execa("kubectl", flags, { input });
  }

  private get core() {
    return this.client.api.v1.namespaces(this.config.namespace);
  }

  private get apps() {
    return this.client.apis.apps.v1.namespaces(this.config.namespace);
  }

  private get batch() {
    return this.client.apis.batch.v1.namespaces(this.config.namespace);
  }

  private get extensions() {
    return this.client.apis.extensions.v1beta1.namespaces(
      this.config.namespace
    );
  }
}
