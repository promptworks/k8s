import { Config, PodsResource } from "../../src";
import {
  createMockResourceAPI,
  createMockConfig,
  mockResponse,
  MockResourceAPI
} from "../factories";

describe("PodsResource", () => {
  let config: Config;
  let api: MockResourceAPI;
  let resource: PodsResource;

  beforeEach(() => {
    config = createMockConfig();
    api = createMockResourceAPI();
    resource = new PodsResource(config, api as any);
  });

  test("getLogs", async () => {
    const logs = await resource.getLogs("foo");
    expect(logs).toEqual(mockResponse.body);
  });

  test("followLogs", async () => {
    const stream = await resource.followLogs("foo");
    expect(stream).toEqual(mockResponse);
  });

  test("exec", async () => {
    const out = await resource.exec("foo");
    expect(out).toEqual(mockResponse.body);
  });

  test("attach", async () => {
    const shell = jest.spyOn(resource, "shell" as any);
    shell.mockResolvedValue({});

    await resource.attach("foo", {
      tty: true,
      stdin: process.stdin,
      container: "jawn"
    });

    expect(shell).toHaveBeenCalledWith(
      "kubectl",
      [
        "attach",
        "foo",
        "--namespace",
        "default",
        "--stdin",
        "--tty",
        "--container",
        "jawn"
      ],
      { stdin: process.stdin, stdout: undefined, stderrr: undefined }
    );
  });

  test("connect", async () => {
    const shell = jest.spyOn(resource, "shell" as any);
    shell.mockResolvedValue({});

    await resource.connect("foo", {
      tty: true,
      stdin: process.stdin,
      container: "jawn",
      command: ["blah"]
    });

    expect(shell).toHaveBeenCalledWith(
      "kubectl",
      [
        "exec",
        "foo",
        "--namespace",
        "default",
        "--stdin",
        "--tty",
        "--container",
        "jawn",
        "--",
        "blah"
      ],
      { stdin: process.stdin, stdout: undefined, stderrr: undefined }
    );
  });
});
