import { getList, getBody } from "../helpers";
import { Config } from "../Config";

export interface ResourceNameAPI {
  get(): Promise<any>;
  delete(): Promise<any>;
}

export interface ResourceAPI {
  (name: string): ResourceNameAPI;
  get(): Promise<any>;
  post(options?: object): Promise<any>;
}

export class Resource<T, A extends ResourceAPI = ResourceAPI> {
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

  public delete(name: string): Promise<T> {
    return getBody(this.api(name).delete());
  }
}
