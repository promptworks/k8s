import { Kubectl } from "../src";

export default async () => {
  const kubectl = new Kubectl();

  kubectl.apply([
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
