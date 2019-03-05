import { Kubernetes } from "../src";

describe("Kubernetes", () => {
  test("has methods", async () => {
    const methods = Object.getOwnPropertyNames(Kubernetes.prototype);
    expect(methods.sort().join("\n")).toMatchInlineSnapshot();
  });
});
