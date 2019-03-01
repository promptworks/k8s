import { getList, getBody } from "./helpers";
import { Config } from "../Config";
import { AnyObject } from "../types";

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

export class Resource<
  T extends AnyObject,
  A extends ResourceAPI = ResourceAPI
> {
  protected api: A;
  protected config: Config;

  public constructor(config: Config, api: A) {
    this.config = config;
    this.api = api;
  }

  public list(): Promise<T[]> {
    return getList(this.api.get());
  }

  public get(name: string): Promise<T> {
    return getBody(this.api(name).get());
  }

  public create(resource: T): Promise<T> {
    return getBody(this.api.post({ body: resource }));
  }

  public replace(name: string, resource: T): Promise<T> {
    return getBody(this.api(name).put({ body: resource }));
  }

  public patch(name: string, resource: DeepPartial<T>): Promise<T> {
    return getBody(this.api(name).patch({ body: resource }));
  }

  public delete(name: string): Promise<T> {
    return getBody(this.api(name).delete());
  }

  public async exists(name: string): Promise<boolean> {
    try {
      await this.api(name).get();
      return true;
    } catch (err) {
      if (err.code === 404) {
        return false;
      }

      throw err;
    }
  }
}
