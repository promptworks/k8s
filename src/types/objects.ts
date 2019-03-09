import * as gen from "./generated";

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
