import { Kubernetes, PodsResource, Resource, Secret, Kubectl } from "../src";
import { createMockKubectl, createMockClient } from "./factories";

const RESOURCES: Array<keyof Kubernetes> = [
  "namespaces",
  "configMaps",
  "deployments",
  "ingresses",
  "secrets",
  "services",
  "daemonSets",
  "replicaSets",
  "jobs",
  "cronJobs",
  "horizontalPodAutoscalers",
  "persistentVolumeClaims"
];

describe("Kubernetes", () => {
  let k8s: Kubernetes;
  let kubectl: jest.Mocked<Kubectl>;

  beforeEach(() => {
    kubectl = createMockKubectl();
    k8s = new Kubernetes({
      kubectl,
      client: createMockClient()
    });
  });

  describe("pods", () => {
    it("is a PodsResource", () => {
      expect(k8s.pods).toBeInstanceOf(PodsResource);
    });
  });

  describe.each(RESOURCES)("%s", (name: keyof Kubernetes) => {
    it("is a Resource", () => {
      expect(k8s[name]).toBeInstanceOf(Resource);
    });
  });

  test("apply", async () => {
    const secret: Secret = {
      apiVersion: "v1",
      kind: "Secret",
      metadata: { name: "example" }
    };

    await k8s.apply([secret]);
    expect(kubectl.run).toHaveBeenCalledWith(["apply", "-f", "-"], {
      input: JSON.stringify(secret)
    });
  });
});
