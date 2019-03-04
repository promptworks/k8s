import { ResourceAPI, ResourceNameAPI, Config } from "../src";

export const mockResponse = {
  code: 200,
  body: {
    mock: "mock response",
    items: [{ mock: "mock response items" }]
  }
};

export const createMockRequest = () => {
  return jest.fn().mockResolvedValue(mockResponse);
};

export const createMockResourceNameAPI = (): jest.Mocked<ResourceNameAPI> => ({
  get: createMockRequest(),
  delete: createMockRequest(),
  patch: createMockRequest(),
  put: createMockRequest()
});

export const createMockResourceAPI = (): jest.Mocked<ResourceAPI> => {
  const nameAPI = createMockResourceNameAPI();
  const mock: any = jest.fn(() => nameAPI);
  mock.get = createMockRequest();
  mock.post = createMockRequest();
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
