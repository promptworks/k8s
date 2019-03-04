import { ResourceAPI, ResourceNameAPI, Config } from "../src";

export interface MockResourceAPI extends jest.Mocked<ResourceAPI> {
  byName: jest.Mocked<ResourceNameAPI>;
}

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

export const createMockResourceNameAPI = () => ({
  get: createMockRequest(),
  getStream: createMockRequest(),
  delete: createMockRequest(),
  patch: createMockRequest(),
  put: createMockRequest(),
  log: { get: createMockRequest(), getStream: createMockRequest() },
  exec: { post: createMockRequest() }
});

export const createMockResourceAPI = () => {
  const nameAPI = createMockResourceNameAPI();
  const mock: any = jest.fn(() => nameAPI);
  mock.get = createMockRequest();
  mock.post = createMockRequest();
  mock.byName = nameAPI;
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
