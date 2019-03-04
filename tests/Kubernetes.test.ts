import { Kubernetes, Config, PodsResource, Resource, Secret } from "../src";
import { createMockConfig } from "./factories";

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
  let config: jest.Mocked<Config>;

  beforeEach(() => {
    config = createMockConfig();
    k8s = new Kubernetes(config);
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
    const shell = jest.spyOn(k8s, "shell" as any);
    shell.mockResolvedValue({});

    const secret: Secret = {
      apiVersion: "v1",
      kind: "Secret",
      metadata: { name: "example" }
    };

    await k8s.apply([secret]);
    expect(shell).toHaveBeenCalledWith(
      "kubectl",
      ["apply", "--namespace", "default", "-f", "-"],
      { input: JSON.stringify(secret) }
    );
  });
});
