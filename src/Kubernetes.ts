import * as k8s from "kubernetes-client";
import {
  Pod,
  Namespace,
  Deployment,
  Secret,
  ConfigMap,
  Ingress,
  Service,
  AnyObject
} from "./types";
import { getList, getBody } from "./helpers";
import * as execa from "execa";
import { Stream } from "stream";
import { Resource } from "./Resource";

interface Options {
  kubeconfig?: string;
  context?: string;
  namespace?: string;
}

interface LogOptions {
  container?: string;
}

export interface ExecOptions {
  command?: string[];
  container?: string;
  stderr?: boolean;
  stdout?: boolean;
}

export interface AttachOptions {
  container?: string;
  stderr?: Stream;
  stdin?: Stream;
  stdout?: Stream;
  tty?: boolean;
}

export interface ConnectOptions extends AttachOptions {
  command?: string[];
}

const toJSON = (input: any) => {
  return JSON.stringify(input);
};

export class Kubernetes {
  private client: k8s.ApiRoot;
  private namespace: string;
  private context?: string;
  private kubeconfig?: string;

  public constructor({
    kubeconfig,
    context,
    namespace = "default"
  }: Options = {}) {
    const config = k8s.config.fromKubeconfig(kubeconfig, context);

    this.namespace = namespace;
    this.context = context;
    this.kubeconfig = kubeconfig;
    this.client = new k8s.Client1_10({ config });
  }

  public get configMaps(): Resource<ConfigMap> {
    return new Resource(this.core.configmaps);
  }

  public get deployments(): Resource<Deployment> {
    return new Resource(this.apps.deployments);
  }

  public get ingresses(): Resource<Ingress> {
    return new Resource(this.extensions.ingresses);
  }

  public get namespaces(): Resource<Namespace> {
    return new Resource(this.client.api.v1.namespaces);
  }

  public get pods(): Resource<Pod> {
    return new Resource(this.core.pods);
  }

  public get secrets(): Resource<Secret> {
    return new Resource(this.core.secrets);
  }

  public get services(): Resource<Service> {
    return new Resource(this.core.services);
  }

  /**
   * Get the logs from a container, and return them as a string.
   */
  public getLogs(pod: string, opts: LogOptions = {}): Promise<string> {
    return getBody(this.core.pods(pod).log.get({ qs: opts }));
  }

  /**
   * Get a log stream from a running container.
   */
  public followLogs(pod: string, opts: LogOptions = {}): Stream {
    return this.core.pods(pod).log.getStream({
      qs: { ...opts, follow: true }
    });
  }

  /**
   * Run a single command and return the output as a string.
   */
  public async exec(pod: string, opts: ExecOptions): Promise<string> {
    return getBody(this.core.pods(pod).exec.post({ qs: opts }));
  }

  /**
   * Attach to a running container.
   */
  public async attach(pod: string, opts: AttachOptions): Promise<void> {
    const flags: string[] = ["attach", pod, ...this.configFlags];

    if (opts.stdin) flags.push("--stdin");
    if (opts.tty) flags.push("--tty");
    if (opts.container) flags.push("--container", opts.container);

    await execa("kubectl", flags, {
      stdin: opts.stdin,
      stdout: opts.stdout,
      stderr: opts.stderr
    });
  }

  /**
   * Establish an interactive `exec` session with a running container.
   */
  public async connect(pod: string, opts: ConnectOptions): Promise<void> {
    const flags: string[] = ["exec", pod, ...this.configFlags];

    if (opts.stdin) flags.push("--stdin");
    if (opts.tty) flags.push("--tty");
    if (opts.container) flags.push("--container", opts.container);
    if (opts.command) flags.push("--", ...opts.command);

    await execa("kubectl", flags, {
      stdin: opts.stdin,
      stdout: opts.stdout,
      stderr: opts.stderr
    });
  }

  /**
   * Apply an array of objects.
   */
  public async apply(objects: AnyObject[]): Promise<void> {
    const flags = ["apply", "-f", "-", ...this.configFlags];
    const input = objects.map(toJSON).join("\n");
    await execa("kubectl", flags, { input });
  }

  private get core() {
    return this.client.api.v1.namespaces(this.namespace);
  }

  private get apps() {
    return this.client.apis.apps.v1.namespaces(this.namespace);
  }

  private get extensions() {
    return this.client.apis.extensions.v1beta1.namespaces(this.namespace);
  }

  private get configFlags() {
    const flags: string[] = [];

    if (this.context) flags.push("--context", this.context);
    if (this.kubeconfig) flags.push("--kubeconfig", this.kubeconfig);
    if (this.namespace) flags.push("--namespace", this.namespace);

    return flags;
  }
}
