import * as gen from "./generated";
import { isObject } from "util";

export type ObjectMeta = gen.IoK8sApimachineryPkgApisMetaV1ObjectMeta;
export type Container = gen.IoK8sApiCoreV1Container;
export type EnvVar = gen.IoK8sApiCoreV1EnvVar;
export type EnvFromSource = gen.IoK8sApiCoreV1EnvFromSource;
export type Probe = gen.IoK8sApiCoreV1Probe;
export type VolumeMount = gen.IoK8sApiCoreV1VolumeMount;
export type ContainerPort = gen.IoK8sApiCoreV1ContainerPort;
export type ServicePort = gen.IoK8sApiCoreV1ServicePort;
export type IngressRule = gen.IoK8sApiExtensionsV1beta1IngressRule;
export type IngressBackend = gen.IoK8sApiExtensionsV1beta1IngressBackend;

export interface GenericObject {
  apiVersion: string;
  kind: string;
  metadata: ObjectMeta & { name: string };
}

export interface Namespace extends gen.IoK8sApiCoreV1Namespace {
  kind: "Namespace";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Pod extends gen.IoK8sApiCoreV1Pod {
  kind: "Pod";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface ConfigMap extends gen.IoK8sApiCoreV1ConfigMap {
  kind: "ConfigMap";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Deployment extends gen.IoK8sApiAppsV1Deployment {
  kind: "Deployment";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Ingress extends gen.IoK8sApiExtensionsV1beta1Ingress {
  kind: "Ingress";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Secret extends gen.IoK8sApiCoreV1Secret {
  kind: "Secret";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Service extends gen.IoK8sApiCoreV1Service {
  kind: "Service";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface DaemonSet extends gen.IoK8sApiAppsV1DaemonSet {
  kind: "DaemonSet";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface ReplicaSet extends gen.IoK8sApiAppsV1ReplicaSet {
  kind: "ReplicaSet";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Job extends gen.IoK8sApiBatchV1Job {
  kind: "Job";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface CronJob extends gen.IoK8sApiBatchV1beta1CronJob {
  kind: "CronJob";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface HorizontalPodAutoscaler
  extends gen.IoK8sApiAutoscalingV1HorizontalPodAutoscaler {
  kind: "HorizontalPodAutoscaler";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface PersistentVolumeClaim
  extends gen.IoK8sApiCoreV1PersistentVolumeClaim {
  kind: "PersistentVolumeClaim";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export type AnyObject =
  | Namespace
  | Pod
  | ConfigMap
  | Deployment
  | Ingress
  | Secret
  | Service
  | DaemonSet
  | ReplicaSet
  | Job
  | CronJob
  | HorizontalPodAutoscaler
  | PersistentVolumeClaim
  | GenericObject;

export const buildObject = (o: AnyObject): AnyObject => o;

export const buildNamespace = (o: Namespace): Namespace => o;

export const buildPod = (o: Pod): Pod => o;

export const buildConfigMap = (o: ConfigMap): ConfigMap => o;

export const buildDeployment = (o: Deployment): Deployment => o;

export const buildIngress = (o: Ingress): Ingress => o;

export const buildSecret = (o: Secret): Secret => o;

export const buildService = (o: Service): Service => o;

export const buildDaemonSet = (o: DaemonSet): DaemonSet => o;

export const buildReplicaSet = (o: ReplicaSet): ReplicaSet => o;

export const buildJob = (o: Job): Job => o;

export const buildCronJob = (o: CronJob): CronJob => o;

export const buildHorizontalPodAutoscaler = (
  o: HorizontalPodAutoscaler
): HorizontalPodAutoscaler => o;

export const buildPersistentVolumeClaim = (
  o: PersistentVolumeClaim
): PersistentVolumeClaim => o;

export const isNamespace = (o: any): o is Namespace => {
  return isObject(o) && o.kind === "Namespace";
};

export const isPod = (o: any): o is Pod => {
  return isObject(o) && o.kind === "Pod";
};

export const isConfigMap = (o: any): o is ConfigMap => {
  return isObject(o) && o.kind === "ConfigMap";
};

export const isDeployment = (o: any): o is Deployment => {
  return isObject(o) && o.kind === "Deployment";
};

export const isIngress = (o: any): o is Ingress => {
  return isObject(o) && o.kind === "Ingress";
};

export const isSecret = (o: any): o is Secret => {
  return isObject(o) && o.kind === "Secret";
};

export const isService = (o: any): o is Service => {
  return isObject(o) && o.kind === "Service";
};

export const isDaemonSet = (o: any): o is DaemonSet => {
  return isObject(o) && o.kind === "DaemonSet";
};

export const isReplicaSet = (o: any): o is ReplicaSet => {
  return isObject(o) && o.kind === "ReplicaSet";
};

export const isJob = (o: any): o is Job => {
  return isObject(o) && o.kind === "Job";
};

export const isCronJob = (o: any): o is CronJob => {
  return isObject(o) && o.kind === "CronJob";
};

export const isHorizontalPodAutoscaler = (
  o: any
): o is HorizontalPodAutoscaler => {
  return isObject(o) && o.kind === "HorizontalPodAutoscaler";
};

export const isPersistentVolumeClaim = (o: any): o is PersistentVolumeClaim => {
  return isObject(o) && o.kind === "PersistentVolumeClaim";
};
