export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P]
};

export interface ResourceNameAPI {
  get(): Promise<any>;
  delete(): Promise<any>;
  put(options?: object): Promise<any>;
  patch(options?: object): Promise<any>;
}

export interface ResourceAPI {
  (name: string): ResourceNameAPI;
  get(): Promise<any>;
  post(options?: object): Promise<any>;
}

export const getBody = <T>(promise: Promise<{ body: T }>) => {
  return promise.then(response => response.body);
};

export const getList = <T>(
  promise: Promise<{ body: { items: T[] } }>
): Promise<T[]> => {
  return getBody(promise).then(body => body.items);
};
