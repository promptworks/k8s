import {
  createMockResourceAPI,
  createMockConfig,
  mockResponse
} from "../factories";
import { Resource, Config, ResourceAPI } from "../../src";

describe("Resource", () => {
  let config!: jest.Mocked<Config>;
  let api!: jest.Mocked<ResourceAPI>;
  let resource!: Resource<any>;

  beforeEach(() => {
    config = createMockConfig();
    api = createMockResourceAPI();
    resource = new Resource(config, api);
  });

  test("list", async () => {
    const object = await resource.list();
    expect(object).toEqual(mockResponse.body.items);
  });

  test("get", async () => {
    const object = await resource.get("foo");
    expect(object).toEqual(mockResponse.body);
  });

  test("delete", async () => {
    const object = await resource.delete("foo");
    expect(object).toEqual(mockResponse.body);
  });

  test("create", async () => {
    const body = { mock: "body" };
    const object = await resource.create(body);
    expect(object).toEqual(mockResponse.body);
  });

  test("replace", async () => {
    const body = { mock: "body" };
    const object = await resource.replace("foo", body);
    expect(object).toEqual(mockResponse.body);
  });

  test("patch", async () => {
    const body = { mock: "body" };
    const object = await resource.patch("foo", body);
    expect(object).toEqual(mockResponse.body);
  });

  describe("exists", () => {
    test("when the object exists", async () => {
      await expect(resource.exists("foo")).resolves.toEqual(true);
    });

    test("when the resource does not exist", async () => {
      const error: any = new Error("not found");
      error.code = 404;

      (api("foo").get as any).mockRejectedValue(error);

      await expect(resource.exists("foo")).resolves.toEqual(false);
    });

    test("when an error occurs", async () => {
      const error: any = new Error("whoops");
      error.code = 500;

      (api("foo").get as any).mockRejectedValue(error);

      await expect(resource.exists("foo")).rejects.toThrow(error);
    });
  });
});
