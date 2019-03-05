import { PodsResource, Kubectl } from "../../src";
import {
  createMockResourceAPI,
  createMockKubectl,
  mockResponse
} from "../factories";

describe("PodsResource", () => {
  let kubectl: jest.Mocked<Kubectl>;
  let api: any;
  let resource: PodsResource;

  beforeEach(() => {
    kubectl = createMockKubectl();
    api = createMockResourceAPI();
    resource = new PodsResource(api, kubectl);
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
    await resource.attach("foo", {
      tty: true,
      stdin: process.stdin,
      container: "jawn"
    });

    expect(kubectl.run).toHaveBeenCalledWith(
      ["attach", "foo", "--stdin", "--tty", "--container", "jawn"],
      { stdin: process.stdin, stdout: undefined, stderrr: undefined }
    );
  });

  test("connect", async () => {
    await resource.connect("foo", {
      tty: true,
      stdin: process.stdin,
      container: "jawn",
      command: ["blah"]
    });

    expect(kubectl.run).toHaveBeenCalledWith(
      ["exec", "foo", "--stdin", "--tty", "--container", "jawn", "--", "blah"],
      { stdin: process.stdin, stdout: undefined, stderrr: undefined }
    );
  });
});
