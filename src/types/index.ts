import * as gen from "./gen";

interface GenericObject<K = string> {
  apiVersion: string;
  kind: K;
  metadata: { name: string };
}

type Kind<K, T> = T & GenericObject<K>;

export type ConfigMap = Kind<"ConfigMap", gen.Configmap>;
export type Deployment = Kind<"Deployment", gen.Deployment>;
export type Ingress = Kind<"Ingress", gen.Ingress>;
export type Namespace = Kind<"Namespace", gen.Namespace>;
export type Pod = Kind<"Pod", gen.Pod>;
export type Secret = Kind<"Secret", gen.Secret>;
export type Service = Kind<"Service", gen.Service>;

export type AnyObject =
  | ConfigMap
  | Deployment
  | Ingress
  | Namespace
  | Pod
  | Secret
  | Service
  | GenericObject;
