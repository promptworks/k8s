import { Kubectl } from "../src";

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

export type MockResourceAPI = ReturnType<typeof createMockResourceAPI>;
export const createMockResourceAPI = () => {
  const byName = {
    get: createMockRequest(),
    getStream: createMockRequest(),
    delete: createMockRequest(),
    patch: createMockRequest(),
    put: createMockRequest(),
    log: { get: createMockRequest(), getStream: createMockRequest() },
    exec: { post: createMockRequest() }
  };

  return Object.assign(jest.fn(() => byName), {
    byName,
    get: createMockRequest(),
    post: createMockRequest()
  });
};

const BlackHoleObject = Proxy.bind(null, () => new BlackHoleObject(), {
  get(_target: () => any, _property: string | symbol, receiver: any) {
    return receiver;
  }
});

export const createMockClient = (): any => {
  return new BlackHoleObject();
};

export const createMockKubectl = (): jest.Mocked<Kubectl> => {
  const run = jest.fn().mockResolvedValue({});
  return { run } as any;
};
