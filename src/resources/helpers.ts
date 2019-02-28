export const getBody = <T>(promise: Promise<{ body: T }>) => {
  return promise.then(response => response.body);
};

export const getList = <T>(
  promise: Promise<{ body: { items: T[] } }>
): Promise<T[]> => {
  return getBody(promise).then(body => body.items);
};
