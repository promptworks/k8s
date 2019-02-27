import { Kubernetes } from "../src";

export default async () => {
  const k8s = new Kubernetes();

  k8s.apply([
    {
      kind: "Secret",
      apiVersion: "v1",
      metadata: { name: "alpha-secret" }
    },
    {
      kind: "Secret",
      apiVersion: "v1",
      metadata: { name: "beta-secret" }
    }
  ]);
};
