import { Kubernetes } from "../src";

const k8s = new Kubernetes();

k8s.listPods().then(pods => {
  console.log("=== Pods");
  console.log(pods);
});
