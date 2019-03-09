import * as gen from "./gen";

export interface GenericObject<K = string> {
  apiVersion: string;
  kind: K;
  metadata: { name: string };
}

type Kind<K, T> = T & GenericObject<K>;

export type ConfigMap = Kind<"ConfigMap", gen.Configmap>;
export type CronJob = Kind<"CronJob", gen.Cronjob>;
export type DaemonSet = Kind<"DaemonSet", gen.Daemonset>;
export type Deployment = Kind<"Deployment", gen.Deployment>;
export type HorizontalPodAutoscaler = Kind<
  "HorizontalPodAutoscaler",
  gen.Horizontalpodautoscaler
>;
export type Ingress = Kind<"Ingress", gen.Ingress>;
export type Job = Kind<"Job", gen.Job>;
export type Namespace = Kind<"Namespace", gen.Namespace>;
export type Pod = Kind<"Pod", gen.Pod>;
export type ReplicaSet = Kind<"ReplicaSet", gen.Replicaset>;
export type Secret = Kind<"Secret", gen.Secret>;
export type Service = Kind<"Service", gen.Service>;
export type StatefulSet = Kind<"StatefulSet", gen.Statefulset>;
export type PersistentVolumeClaim = Kind<
  "PersistentVolumeClaim",
  gen.Persistentvolumeclaim
>;

export type AnyObject =
  | ConfigMap
  | CronJob
  | DaemonSet
  | Deployment
  | Ingress
  | HorizontalPodAutoscaler
  | Job
  | Namespace
  | Pod
  | ReplicaSet
  | Secret
  | Service
  | StatefulSet
  | PersistentVolumeClaim
  | GenericObject;
