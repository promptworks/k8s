import { Kubernetes } from "../src";

const print = (heading: string) => (data: any) => {
  console.log(`\n=== ${heading}`);
  console.log(data);
};

export default async () => {
  const k8s = new Kubernetes();

  await k8s.namespaces.get("default").then(print("Namespace"));
  await k8s.namespaces.list().then(print("Namespaces"));
  await k8s.pods.list().then(print("Pods"));
  await k8s.services.list().then(print("Services"));
  await k8s.secrets.list().then(print("Secrets"));
  await k8s.configMaps.list().then(print("Configmaps"));
  await k8s.deployments.list().then(print("Deployments"));
  await k8s.ingresses.list().then(print("Ingresses"));
};
