import { Kubernetes, Config, PodsResource, Resource, Secret } from "../src";
import { createMockConfig } from "./factories";

describe("Kubernetes", () => {
  let k8s: Kubernetes;
  let config: jest.Mocked<Config>;

  beforeEach(() => {
    config = createMockConfig();
    k8s = new Kubernetes(config);
  });

  test("pods", () => {
    expect(k8s.pods).toBeInstanceOf(PodsResource);
  });

  test("namespaces", () => {
    expect(k8s.namespaces).toBeInstanceOf(Resource);
  });

  test("configMaps", () => {
    expect(k8s.configMaps).toBeInstanceOf(Resource);
  });

  test("deployments", () => {
    expect(k8s.deployments).toBeInstanceOf(Resource);
  });

  test("ingresses", () => {
    expect(k8s.ingresses).toBeInstanceOf(Resource);
  });

  test("secrets", () => {
    expect(k8s.secrets).toBeInstanceOf(Resource);
  });

  test("services", () => {
    expect(k8s.services).toBeInstanceOf(Resource);
  });

  test("daemonSets", () => {
    expect(k8s.daemonSets).toBeInstanceOf(Resource);
  });

  test("replicaSets", () => {
    expect(k8s.replicaSets).toBeInstanceOf(Resource);
  });

  test("jobs", () => {
    expect(k8s.jobs).toBeInstanceOf(Resource);
  });

  test("cronJobs", () => {
    expect(k8s.cronJobs).toBeInstanceOf(Resource);
  });

  test("horizontalPodAutoscalers", () => {
    expect(k8s.horizontalPodAutoscalers).toBeInstanceOf(Resource);
  });

  test("persistentVolumeClaims", () => {
    expect(k8s.persistentVolumeClaims).toBeInstanceOf(Resource);
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
