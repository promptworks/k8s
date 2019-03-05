import { getList, getBody, ResourceAPI, DeepPartial } from "./helpers";
import { AnyObject } from "../types";

export class Resource<
  T extends AnyObject,
  API extends ResourceAPI = ResourceAPI
> {
  protected api: API;

  public constructor(api: API) {
    this.api = api;
  }

  /**
   * List all objects
   */
  public list(): Promise<T[]> {
    return getList(this.api.get());
  }

  /**
   * Get object by name
   */
  public get(name: string): Promise<T> {
    return getBody(this.api(name).get());
  }

  /**
   * Create a new object
   */
  public create(resource: T): Promise<T> {
    return getBody(this.api.post({ body: resource }));
  }

  /**
   * Replace an object by name
   */
  public replace(name: string, resource: T): Promise<T> {
    return getBody(this.api(name).put({ body: resource }));
  }

  /**
   * Patch an object by name
   */
  public patch(name: string, resource: DeepPartial<T>): Promise<T> {
    return getBody(this.api(name).patch({ body: resource }));
  }

  /**
   * Delete an object by name
   */
  public delete(name: string): Promise<T> {
    return getBody(this.api(name).delete());
  }

  /**
   * Does an object with the given name exist?
   */
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
