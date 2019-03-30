import { AnyObject, isPod, isDeployment } from "./types/objects";
import * as k8s from "kubernetes-client";
import { Stream } from "stream";
import { Kubectl } from "./Kubectl";
import {
  Options,
  LogOptions,
  ExecOptions,
  Namespace,
  DeepPartial,
  Pod,
  ConfigMap,
  Deployment,
  Ingress,
  Secret,
  Service,
  DaemonSet,
  ReplicaSet,
  Job,
  CronJob,
  HorizontalPodAutoscaler,
  PersistentVolumeClaim,
  PodPhase
} from "./types";

const getBody = <T>(promise: Promise<{ body: T }>) => {
  return promise.then(response => response.body);
};

const getList = <T>(
  promise: Promise<{ body: { items: T[] } }>
): Promise<T[]> => {
  return getBody(promise).then(body => body.items);
};

const exists = async (promise: Promise<any>): Promise<boolean> => {
  return promise
    .then(() => true)
    .catch(err => {
      if (err.code === 404) {
        return false;
      }

      throw err;
    });
};

export class PodStatusError extends Error {}

export class Kubernetes extends Kubectl {
  public readonly kubeconfig: any;
  public readonly namespace: string;
  public readonly context?: string;

  protected readonly client: k8s.ApiRoot;

  public constructor({ namespace = "default", ...opts }: Options = {}) {
    const kubeconfig = k8s.config.loadKubeconfig(opts.kubeconfig);
    const config = k8s.config.fromKubeconfig(kubeconfig, opts.context);
    const context = opts.context || kubeconfig["current-context"];
    const client = new k8s.Client1_10({ config });

    super({
      namespace,
      context,
      kubeconfig: opts.kubeconfig
    });

    this.namespace = namespace;
    this.kubeconfig = kubeconfig;
    this.context = context;
    this.client = client;
  }

  /**
   * Get the logs from a container, and return them as a string.
   */
  public getLogs(name: string, opts: LogOptions = {}): Promise<string> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .pods(name)
        .log.get({ qs: opts })
    );
  }

  /**
   * Get a log stream from a running container.
   */
  public followLogs(name: string, opts: LogOptions = {}): Stream {
    return this.client.api.v1
      .ns(this.namespace)
      .pods(name)
      .log.getStream({
        qs: { ...opts, follow: true }
      });
  }

  /**
   * Run a single command and return the output as a string.
   */
  public async exec(name: string, opts: ExecOptions = {}): Promise<string> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .pods(name)
        .exec.post({ qs: opts })
    );
  }

  /**
   * Wait until a pod is running. If it transitions to a failed or unknown state,
   * throw an error.
   */
  public async waitForPod(name: string): Promise<void> {
    while (true) {
      const pod = await this.getPod(name);

      switch (pod.status!.phase as PodPhase) {
        case PodPhase.SUCCEEDED:
          return;

        case PodPhase.FAILED:
          throw new PodStatusError(`Pod '${name}' failed.`);

        case PodPhase.UNKNOWN:
          throw new PodStatusError(
            `Pod '${name}' failed, because the status is unknown.`
          );

        default:
          await new Promise(resolve => setTimeout(resolve, 3000));
      }
    }
  }

  /**
   * Wait for all objects to finish deploying.
   */
  public async waitForObjects(objects: AnyObject[]) {
    const pods: Promise<any>[] = objects
      .filter(isPod)
      .map(pod => this.waitForPod(pod.metadata.name));

    const deployments: Promise<any>[] = objects
      .filter(isDeployment)
      .map(deployment =>
        this.waitForRollout("deployment", deployment.metadata.name)
      );

    await Promise.all(pods.concat(deployments));
  }

  // GENERATED CODE BEGINS HERE

  /**
   * List all Namespaces
   */
  public listNamespaces(): Promise<Namespace[]> {
    return getList(this.client.api.v1.namespaces.get());
  }

  /**
   * Get Namespace by name
   */
  public getNamespace(name: string): Promise<Namespace> {
    return getBody(this.client.api.v1.namespaces(name).get());
  }

  /**
   * Create a new Namespace
   */
  public createNamespace(resource: Namespace): Promise<Namespace> {
    return getBody(this.client.api.v1.namespaces.post({ body: resource }));
  }

  /**
   * Replace a Namespace by name
   */
  public replaceNamespace(
    name: string,
    resource: Namespace
  ): Promise<Namespace> {
    return getBody(this.client.api.v1.namespaces(name).put({ body: resource }));
  }

  /**
   * Patch a Namespace by name
   */
  public patchNamespace(
    name: string,
    resource: DeepPartial<Namespace>
  ): Promise<Namespace> {
    return getBody(
      this.client.api.v1.namespaces(name).patch({ body: resource })
    );
  }

  /**
   * Delete a Namespace by name
   */
  public deleteNamespace(name: string): Promise<Namespace> {
    return getBody(this.client.api.v1.namespaces(name).delete());
  }

  /**
   * Does a Namespace with the given name exist?
   */
  public hasNamespace(name: string): Promise<boolean> {
    return exists(this.client.api.v1.namespaces(name).get());
  }

  /**
   * List all Pods
   */
  public listPods(): Promise<Pod[]> {
    return getList(this.client.api.v1.ns(this.namespace).pods.get());
  }

  /**
   * Get Pod by name
   */
  public getPod(name: string): Promise<Pod> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .pods(name)
        .get()
    );
  }

  /**
   * Create a new Pod
   */
  public createPod(resource: Pod): Promise<Pod> {
    return getBody(
      this.client.api.v1.ns(this.namespace).pods.post({ body: resource })
    );
  }

  /**
   * Replace a Pod by name
   */
  public replacePod(name: string, resource: Pod): Promise<Pod> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .pods(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a Pod by name
   */
  public patchPod(name: string, resource: DeepPartial<Pod>): Promise<Pod> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .pods(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a Pod by name
   */
  public deletePod(name: string): Promise<Pod> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .pods(name)
        .delete()
    );
  }

  /**
   * Does a Pod with the given name exist?
   */
  public hasPod(name: string): Promise<boolean> {
    return exists(
      this.client.api.v1
        .ns(this.namespace)
        .pods(name)
        .get()
    );
  }

  /**
   * List all ConfigMaps
   */
  public listConfigMaps(): Promise<ConfigMap[]> {
    return getList(this.client.api.v1.ns(this.namespace).configmaps.get());
  }

  /**
   * Get ConfigMap by name
   */
  public getConfigMap(name: string): Promise<ConfigMap> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .configmaps(name)
        .get()
    );
  }

  /**
   * Create a new ConfigMap
   */
  public createConfigMap(resource: ConfigMap): Promise<ConfigMap> {
    return getBody(
      this.client.api.v1.ns(this.namespace).configmaps.post({ body: resource })
    );
  }

  /**
   * Replace a ConfigMap by name
   */
  public replaceConfigMap(
    name: string,
    resource: ConfigMap
  ): Promise<ConfigMap> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .configmaps(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a ConfigMap by name
   */
  public patchConfigMap(
    name: string,
    resource: DeepPartial<ConfigMap>
  ): Promise<ConfigMap> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .configmaps(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a ConfigMap by name
   */
  public deleteConfigMap(name: string): Promise<ConfigMap> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .configmaps(name)
        .delete()
    );
  }

  /**
   * Does a ConfigMap with the given name exist?
   */
  public hasConfigMap(name: string): Promise<boolean> {
    return exists(
      this.client.api.v1
        .ns(this.namespace)
        .configmaps(name)
        .get()
    );
  }

  /**
   * List all Deployments
   */
  public listDeployments(): Promise<Deployment[]> {
    return getList(
      this.client.apis.apps.v1.ns(this.namespace).deployments.get()
    );
  }

  /**
   * Get Deployment by name
   */
  public getDeployment(name: string): Promise<Deployment> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .deployments(name)
        .get()
    );
  }

  /**
   * Create a new Deployment
   */
  public createDeployment(resource: Deployment): Promise<Deployment> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .deployments.post({ body: resource })
    );
  }

  /**
   * Replace a Deployment by name
   */
  public replaceDeployment(
    name: string,
    resource: Deployment
  ): Promise<Deployment> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .deployments(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a Deployment by name
   */
  public patchDeployment(
    name: string,
    resource: DeepPartial<Deployment>
  ): Promise<Deployment> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .deployments(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a Deployment by name
   */
  public deleteDeployment(name: string): Promise<Deployment> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .deployments(name)
        .delete()
    );
  }

  /**
   * Does a Deployment with the given name exist?
   */
  public hasDeployment(name: string): Promise<boolean> {
    return exists(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .deployments(name)
        .get()
    );
  }

  /**
   * List all Ingresses
   */
  public listIngresses(): Promise<Ingress[]> {
    return getList(
      this.client.apis.extensions.v1beta1.ns(this.namespace).ingresses.get()
    );
  }

  /**
   * Get Ingress by name
   */
  public getIngress(name: string): Promise<Ingress> {
    return getBody(
      this.client.apis.extensions.v1beta1
        .ns(this.namespace)
        .ingresses(name)
        .get()
    );
  }

  /**
   * Create a new Ingress
   */
  public createIngress(resource: Ingress): Promise<Ingress> {
    return getBody(
      this.client.apis.extensions.v1beta1
        .ns(this.namespace)
        .ingresses.post({ body: resource })
    );
  }

  /**
   * Replace a Ingress by name
   */
  public replaceIngress(name: string, resource: Ingress): Promise<Ingress> {
    return getBody(
      this.client.apis.extensions.v1beta1
        .ns(this.namespace)
        .ingresses(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a Ingress by name
   */
  public patchIngress(
    name: string,
    resource: DeepPartial<Ingress>
  ): Promise<Ingress> {
    return getBody(
      this.client.apis.extensions.v1beta1
        .ns(this.namespace)
        .ingresses(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a Ingress by name
   */
  public deleteIngress(name: string): Promise<Ingress> {
    return getBody(
      this.client.apis.extensions.v1beta1
        .ns(this.namespace)
        .ingresses(name)
        .delete()
    );
  }

  /**
   * Does a Ingress with the given name exist?
   */
  public hasIngress(name: string): Promise<boolean> {
    return exists(
      this.client.apis.extensions.v1beta1
        .ns(this.namespace)
        .ingresses(name)
        .get()
    );
  }

  /**
   * List all Secrets
   */
  public listSecrets(): Promise<Secret[]> {
    return getList(this.client.api.v1.ns(this.namespace).secrets.get());
  }

  /**
   * Get Secret by name
   */
  public getSecret(name: string): Promise<Secret> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .secrets(name)
        .get()
    );
  }

  /**
   * Create a new Secret
   */
  public createSecret(resource: Secret): Promise<Secret> {
    return getBody(
      this.client.api.v1.ns(this.namespace).secrets.post({ body: resource })
    );
  }

  /**
   * Replace a Secret by name
   */
  public replaceSecret(name: string, resource: Secret): Promise<Secret> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .secrets(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a Secret by name
   */
  public patchSecret(
    name: string,
    resource: DeepPartial<Secret>
  ): Promise<Secret> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .secrets(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a Secret by name
   */
  public deleteSecret(name: string): Promise<Secret> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .secrets(name)
        .delete()
    );
  }

  /**
   * Does a Secret with the given name exist?
   */
  public hasSecret(name: string): Promise<boolean> {
    return exists(
      this.client.api.v1
        .ns(this.namespace)
        .secrets(name)
        .get()
    );
  }

  /**
   * List all Services
   */
  public listServices(): Promise<Service[]> {
    return getList(this.client.api.v1.ns(this.namespace).services.get());
  }

  /**
   * Get Service by name
   */
  public getService(name: string): Promise<Service> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .services(name)
        .get()
    );
  }

  /**
   * Create a new Service
   */
  public createService(resource: Service): Promise<Service> {
    return getBody(
      this.client.api.v1.ns(this.namespace).services.post({ body: resource })
    );
  }

  /**
   * Replace a Service by name
   */
  public replaceService(name: string, resource: Service): Promise<Service> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .services(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a Service by name
   */
  public patchService(
    name: string,
    resource: DeepPartial<Service>
  ): Promise<Service> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .services(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a Service by name
   */
  public deleteService(name: string): Promise<Service> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .services(name)
        .delete()
    );
  }

  /**
   * Does a Service with the given name exist?
   */
  public hasService(name: string): Promise<boolean> {
    return exists(
      this.client.api.v1
        .ns(this.namespace)
        .services(name)
        .get()
    );
  }

  /**
   * List all DaemonSets
   */
  public listDaemonSets(): Promise<DaemonSet[]> {
    return getList(
      this.client.apis.apps.v1.ns(this.namespace).daemonsets.get()
    );
  }

  /**
   * Get DaemonSet by name
   */
  public getDaemonSet(name: string): Promise<DaemonSet> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .daemonsets(name)
        .get()
    );
  }

  /**
   * Create a new DaemonSet
   */
  public createDaemonSet(resource: DaemonSet): Promise<DaemonSet> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .daemonsets.post({ body: resource })
    );
  }

  /**
   * Replace a DaemonSet by name
   */
  public replaceDaemonSet(
    name: string,
    resource: DaemonSet
  ): Promise<DaemonSet> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .daemonsets(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a DaemonSet by name
   */
  public patchDaemonSet(
    name: string,
    resource: DeepPartial<DaemonSet>
  ): Promise<DaemonSet> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .daemonsets(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a DaemonSet by name
   */
  public deleteDaemonSet(name: string): Promise<DaemonSet> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .daemonsets(name)
        .delete()
    );
  }

  /**
   * Does a DaemonSet with the given name exist?
   */
  public hasDaemonSet(name: string): Promise<boolean> {
    return exists(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .daemonsets(name)
        .get()
    );
  }

  /**
   * List all ReplicaSets
   */
  public listReplicaSets(): Promise<ReplicaSet[]> {
    return getList(
      this.client.apis.apps.v1.ns(this.namespace).replicasets.get()
    );
  }

  /**
   * Get ReplicaSet by name
   */
  public getReplicaSet(name: string): Promise<ReplicaSet> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .replicasets(name)
        .get()
    );
  }

  /**
   * Create a new ReplicaSet
   */
  public createReplicaSet(resource: ReplicaSet): Promise<ReplicaSet> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .replicasets.post({ body: resource })
    );
  }

  /**
   * Replace a ReplicaSet by name
   */
  public replaceReplicaSet(
    name: string,
    resource: ReplicaSet
  ): Promise<ReplicaSet> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .replicasets(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a ReplicaSet by name
   */
  public patchReplicaSet(
    name: string,
    resource: DeepPartial<ReplicaSet>
  ): Promise<ReplicaSet> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .replicasets(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a ReplicaSet by name
   */
  public deleteReplicaSet(name: string): Promise<ReplicaSet> {
    return getBody(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .replicasets(name)
        .delete()
    );
  }

  /**
   * Does a ReplicaSet with the given name exist?
   */
  public hasReplicaSet(name: string): Promise<boolean> {
    return exists(
      this.client.apis.apps.v1
        .ns(this.namespace)
        .replicasets(name)
        .get()
    );
  }

  /**
   * List all Jobs
   */
  public listJobs(): Promise<Job[]> {
    return getList(this.client.apis.batch.v1.ns(this.namespace).jobs.get());
  }

  /**
   * Get Job by name
   */
  public getJob(name: string): Promise<Job> {
    return getBody(
      this.client.apis.batch.v1
        .ns(this.namespace)
        .jobs(name)
        .get()
    );
  }

  /**
   * Create a new Job
   */
  public createJob(resource: Job): Promise<Job> {
    return getBody(
      this.client.apis.batch.v1.ns(this.namespace).jobs.post({ body: resource })
    );
  }

  /**
   * Replace a Job by name
   */
  public replaceJob(name: string, resource: Job): Promise<Job> {
    return getBody(
      this.client.apis.batch.v1
        .ns(this.namespace)
        .jobs(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a Job by name
   */
  public patchJob(name: string, resource: DeepPartial<Job>): Promise<Job> {
    return getBody(
      this.client.apis.batch.v1
        .ns(this.namespace)
        .jobs(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a Job by name
   */
  public deleteJob(name: string): Promise<Job> {
    return getBody(
      this.client.apis.batch.v1
        .ns(this.namespace)
        .jobs(name)
        .delete()
    );
  }

  /**
   * Does a Job with the given name exist?
   */
  public hasJob(name: string): Promise<boolean> {
    return exists(
      this.client.apis.batch.v1
        .ns(this.namespace)
        .jobs(name)
        .get()
    );
  }

  /**
   * List all CronJobs
   */
  public listCronJobs(): Promise<CronJob[]> {
    return getList(
      this.client.apis.batch.v1beta1.ns(this.namespace).cronjobs.get()
    );
  }

  /**
   * Get CronJob by name
   */
  public getCronJob(name: string): Promise<CronJob> {
    return getBody(
      this.client.apis.batch.v1beta1
        .ns(this.namespace)
        .cronjobs(name)
        .get()
    );
  }

  /**
   * Create a new CronJob
   */
  public createCronJob(resource: CronJob): Promise<CronJob> {
    return getBody(
      this.client.apis.batch.v1beta1
        .ns(this.namespace)
        .cronjobs.post({ body: resource })
    );
  }

  /**
   * Replace a CronJob by name
   */
  public replaceCronJob(name: string, resource: CronJob): Promise<CronJob> {
    return getBody(
      this.client.apis.batch.v1beta1
        .ns(this.namespace)
        .cronjobs(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a CronJob by name
   */
  public patchCronJob(
    name: string,
    resource: DeepPartial<CronJob>
  ): Promise<CronJob> {
    return getBody(
      this.client.apis.batch.v1beta1
        .ns(this.namespace)
        .cronjobs(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a CronJob by name
   */
  public deleteCronJob(name: string): Promise<CronJob> {
    return getBody(
      this.client.apis.batch.v1beta1
        .ns(this.namespace)
        .cronjobs(name)
        .delete()
    );
  }

  /**
   * Does a CronJob with the given name exist?
   */
  public hasCronJob(name: string): Promise<boolean> {
    return exists(
      this.client.apis.batch.v1beta1
        .ns(this.namespace)
        .cronjobs(name)
        .get()
    );
  }

  /**
   * List all HorizontalPodAutoscalers
   */
  public listHorizontalPodAutoscalers(): Promise<HorizontalPodAutoscaler[]> {
    return getList(
      this.client.apis.autoscaling.v1
        .ns(this.namespace)
        .horizontalpodautoscalers.get()
    );
  }

  /**
   * Get HorizontalPodAutoscaler by name
   */
  public getHorizontalPodAutoscaler(
    name: string
  ): Promise<HorizontalPodAutoscaler> {
    return getBody(
      this.client.apis.autoscaling.v1
        .ns(this.namespace)
        .horizontalpodautoscalers(name)
        .get()
    );
  }

  /**
   * Create a new HorizontalPodAutoscaler
   */
  public createHorizontalPodAutoscaler(
    resource: HorizontalPodAutoscaler
  ): Promise<HorizontalPodAutoscaler> {
    return getBody(
      this.client.apis.autoscaling.v1
        .ns(this.namespace)
        .horizontalpodautoscalers.post({ body: resource })
    );
  }

  /**
   * Replace a HorizontalPodAutoscaler by name
   */
  public replaceHorizontalPodAutoscaler(
    name: string,
    resource: HorizontalPodAutoscaler
  ): Promise<HorizontalPodAutoscaler> {
    return getBody(
      this.client.apis.autoscaling.v1
        .ns(this.namespace)
        .horizontalpodautoscalers(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a HorizontalPodAutoscaler by name
   */
  public patchHorizontalPodAutoscaler(
    name: string,
    resource: DeepPartial<HorizontalPodAutoscaler>
  ): Promise<HorizontalPodAutoscaler> {
    return getBody(
      this.client.apis.autoscaling.v1
        .ns(this.namespace)
        .horizontalpodautoscalers(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a HorizontalPodAutoscaler by name
   */
  public deleteHorizontalPodAutoscaler(
    name: string
  ): Promise<HorizontalPodAutoscaler> {
    return getBody(
      this.client.apis.autoscaling.v1
        .ns(this.namespace)
        .horizontalpodautoscalers(name)
        .delete()
    );
  }

  /**
   * Does a HorizontalPodAutoscaler with the given name exist?
   */
  public hasHorizontalPodAutoscaler(name: string): Promise<boolean> {
    return exists(
      this.client.apis.autoscaling.v1
        .ns(this.namespace)
        .horizontalpodautoscalers(name)
        .get()
    );
  }

  /**
   * List all PersistentVolumeClaims
   */
  public listPersistentVolumeClaims(): Promise<PersistentVolumeClaim[]> {
    return getList(
      this.client.api.v1.ns(this.namespace).persistentvolumeclaim.get()
    );
  }

  /**
   * Get PersistentVolumeClaim by name
   */
  public getPersistentVolumeClaim(
    name: string
  ): Promise<PersistentVolumeClaim> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .persistentvolumeclaim(name)
        .get()
    );
  }

  /**
   * Create a new PersistentVolumeClaim
   */
  public createPersistentVolumeClaim(
    resource: PersistentVolumeClaim
  ): Promise<PersistentVolumeClaim> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .persistentvolumeclaim.post({ body: resource })
    );
  }

  /**
   * Replace a PersistentVolumeClaim by name
   */
  public replacePersistentVolumeClaim(
    name: string,
    resource: PersistentVolumeClaim
  ): Promise<PersistentVolumeClaim> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .persistentvolumeclaim(name)
        .put({ body: resource })
    );
  }

  /**
   * Patch a PersistentVolumeClaim by name
   */
  public patchPersistentVolumeClaim(
    name: string,
    resource: DeepPartial<PersistentVolumeClaim>
  ): Promise<PersistentVolumeClaim> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .persistentvolumeclaim(name)
        .patch({ body: resource })
    );
  }

  /**
   * Delete a PersistentVolumeClaim by name
   */
  public deletePersistentVolumeClaim(
    name: string
  ): Promise<PersistentVolumeClaim> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .persistentvolumeclaim(name)
        .delete()
    );
  }

  /**
   * Does a PersistentVolumeClaim with the given name exist?
   */
  public hasPersistentVolumeClaim(name: string): Promise<boolean> {
    return exists(
      this.client.api.v1
        .ns(this.namespace)
        .persistentvolumeclaim(name)
        .get()
    );
  }
}
