import { Kubernetes } from "../src";

const k8s = new Kubernetes();

const print = async (name: string, promise: Promise<any>) => {
  const items = await promise;
  console.log(`\n=== ${name}`);
  console.log(items);
};

print("Namespace", k8s.getNamespace("default"));
print("Namespaces", k8s.listNamespaces());
print("Pods", k8s.listPods());
print("Services", k8s.listServices());
print("Secrets", k8s.listSecrets());
print("Configmaps", k8s.listConfigmaps());
print("Deployments", k8s.listDeployments());
print("Ingresses", k8s.listIngresses());
