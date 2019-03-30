import * as k8s from "kubernetes-client";
import { Options, LogOptions, ExecOptions } from "./types";
import { Stream } from "stream";
import { Kubectl } from "./Kubectl";

export const getBody = <T>(promise: Promise<{ body: T }>) => {
  return promise.then(response => response.body);
};

export const getList = <T>(
  promise: Promise<{ body: { items: T[] } }>
): Promise<T[]> => {
  return getBody(promise).then(body => body.items);
};

export const exists = async (promise: Promise<any>): Promise<boolean> => {
  return promise
    .then(() => true)
    .catch(err => {
      if (err.code === 404) {
        return false;
      }

      throw err;
    });
};

export class Kubernetes extends Kubectl {
  public readonly kubeconfig: any;
  public readonly namespace: string;
  public readonly context?: string;

  protected readonly client: k8s.ApiRoot;

  public constructor({ namespace = "default", ...opts }: Options = {}) {
    const kubeconfig = k8s.config.loadKubeconfig(opts.kubeconfig);
    const config = k8s.config.fromKubeconfig(kubeconfig, opts.context);
    const context = opts.context || kubeconfig["current-context"];
    const client = new k8s.Client1_10({ config });

    super({
      namespace,
      context,
      kubeconfig: opts.kubeconfig
    });

    this.namespace = namespace;
    this.kubeconfig = kubeconfig;
    this.context = context;
    this.client = client;
  }

  /**
   * Get the logs from a container, and return them as a string.
   */
  public getLogs(name: string, opts: LogOptions = {}): Promise<string> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .pods(name)
        .log.get({ qs: opts })
    );
  }

  /**
   * Get a log stream from a running container.
   */
  public followLogs(name: string, opts: LogOptions = {}): Stream {
    return this.client.api.v1
      .ns(this.namespace)
      .pods(name)
      .log.getStream({
        qs: { ...opts, follow: true }
      });
  }

  /**
   * Run a single command and return the output as a string.
   */
  public async exec(name: string, opts: ExecOptions = {}): Promise<string> {
    return getBody(
      this.client.api.v1
        .ns(this.namespace)
        .pods(name)
        .exec.post({ qs: opts })
    );
  }

  // GENERATED CODE BEGINS HERE
  // GENERATED CODE ENDS HERE
}
