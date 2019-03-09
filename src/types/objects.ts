import * as gen from "./gen";

export type ObjectMeta = gen.Objectmeta;
export type Container = gen.Container;
export type EnvVar = gen.Envvar;
export type Probe = gen.Probe;

export interface GenericObject {
  apiVersion: string;
  kind: string;
  metadata: ObjectMeta & { name: string };
}

export interface Namespace extends gen.Namespace {
  kind: "Namespace";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Pod extends gen.Pod {
  kind: "Pod";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface ConfigMap extends gen.Configmap {
  kind: "ConfigMap";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Deployment extends gen.Deployment {
  kind: "Deployment";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Ingress extends gen.Ingress {
  kind: "Ingress";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Secret extends gen.Secret {
  kind: "Secret";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Service extends gen.Service {
  kind: "Service";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface DaemonSet extends gen.Daemonset {
  kind: "DaemonSet";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface ReplicaSet extends gen.Replicaset {
  kind: "ReplicaSet";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface Job extends gen.Job {
  kind: "Job";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface CronJob extends gen.Cronjob {
  kind: "CronJob";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface HorizontalPodAutoscaler extends gen.Horizontalpodautoscaler {
  kind: "HorizontalPodAutoscaler";
  apiVersion: string;
  metadata: ObjectMeta & { name: string };
}

export interface PersistentVolumeClaim extends gen.Persistentvolumeclaim {
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
