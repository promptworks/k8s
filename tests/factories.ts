import { ResourceAPI, ResourceNameAPI, Config } from "../src";

export const createMockResourceNameAPI = (): jest.Mocked<ResourceNameAPI> => ({
  get: jest.fn(),
  delete: jest.fn(),
  patch: jest.fn(),
  put: jest.fn()
});

export const createMockResourceAPI = (): jest.Mocked<ResourceAPI> => {
  const mock: any = jest.fn(createMockResourceNameAPI);
  mock.get = jest.fn();
  mock.post = jest.fn();
  return mock;
};

const BlackHoleObject = Proxy.bind(null, () => new BlackHoleObject(), {
  get(_target: () => any, _property: string | symbol, receiver: any) {
    return receiver;
  }
});

export const createMockClient = (): any => {
  return new BlackHoleObject();
};

export const createMockConfig = (overrides: Partial<Config> = {}): Config => ({
  namespace: "default",
  flags: ["--namespace", "default"],
  client: createMockClient(),
  ...overrides
});
