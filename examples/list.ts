import { Kubernetes } from "../src";

const print = (heading: string) => (data: any) => {
  console.log(`\n=== ${heading}`);
  console.log(data);
};

export default async () => {
  const k8s = new Kubernetes();

  await k8s.getNamespace("default").then(print("Namespace"));
  await k8s.listNamespaces().then(print("Namespaces"));
  await k8s.listPods().then(print("Pods"));
  await k8s.listServices().then(print("Services"));
  await k8s.listSecrets().then(print("Secrets"));
  await k8s.listConfigmaps().then(print("Configmaps"));
  await k8s.listDeployments().then(print("Deployments"));
  await k8s.listIngresses().then(print("Ingresses"));
};
