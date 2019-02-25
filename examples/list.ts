import { Kubernetes } from "../src";

const k8s = new Kubernetes();

k8s.getNamespace("default").then(namespace => {
  console.log("=== Namespace");
  console.log(namespace);
});

k8s.listNamespaces().then(namespaces => {
  console.log("=== Namespaces");
  console.log(namespaces);
});

k8s.listPods().then(pods => {
  console.log("=== Pods");
  console.log(pods);
});

k8s.listDeployments().then(deployments => {
  console.log("=== Deployments");
  console.log(deployments);
});
