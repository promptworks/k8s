import * as k8s from "kubernetes-client";
import { Pod } from "./types/pod";
import { Namespace } from "./types/namespace";
import { getList, getBody } from "./helpers";
import { Deployment } from "./types/deployment";
import { Secret } from "./types/secret";
import { Configmap } from "./types/configmap";
import { Ingress } from "./types/ingress";
import { Service } from "./types/service";
import * as execa from "execa";
import { Stream } from "stream";

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

  /**
   * Namespaces
   */

  public listNamespaces(): Promise<Namespace[]> {
    return getList(this.client.api.v1.namespaces.get());
  }

  public getNamespace(name: string): Promise<Namespace> {
    return getBody(this.client.api.v1.namespaces(name).get());
  }

  /**
   * Pods
   */

  public listPods(): Promise<Pod[]> {
    return getList(this.core.pods.get());
  }

  public getPod(name: string): Promise<Pod> {
    return getBody(this.core.pods(name).get());
  }

  public createPod(pod: Pod): Promise<Pod> {
    return getBody(this.core.pods.post({ body: pod }));
  }

  public deletePod(name: string): Promise<Pod> {
    return getBody(this.core.pods(name).delete());
  }

  /**
   * Services
   */

  public listServices(): Promise<Service> {
    return getList(this.core.services.get());
  }

  public getService(name: string): Promise<Service> {
    return getBody(this.core.services(name).get());
  }

  /**
   * Secrets
   */

  public listSecrets(): Promise<Secret[]> {
    return getList(this.core.secrets.get());
  }

  public getSecret(name: string): Promise<Secret> {
    return getBody(this.core.secrets(name).get());
  }

  /**
   * Configmaps
   */

  public listConfigmaps(): Promise<Configmap[]> {
    return getList(this.core.configmaps.get());
  }

  public getConfigmap(name: string): Promise<Configmap> {
    return getBody(this.core.configmaps(name).get());
  }

  /**
   * Deployments
   */

  public listDeployments(): Promise<Deployment[]> {
    return getList(this.apps.deployments.get());
  }

  public getDeployment(name: string): Promise<Deployment> {
    return getBody(this.apps.deployments(name).get());
  }

  /**
   * Ingress
   */

  public listIngresses(): Promise<Ingress[]> {
    return getList(this.extensions.ingresses.get());
  }

  public getIngress(name: string): Promise<Ingress> {
    return getBody(this.extensions.ingresses(name).get());
  }

  /**
   * Logs
   */

  public getLogs(name: string, opts: LogOptions = {}): Promise<string> {
    return getBody(this.core.pods(name).log.get({ qs: opts }));
  }

  public streamLogs(
    name: string,
    opts: LogOptions = {}
  ): NodeJS.ReadableStream {
    return this.core.pods(name).log.getStream({
      qs: { ...opts, follow: true }
    });
  }

  /**
   * Exec
   */

  public async exec(name: string, opts: ExecOptions): Promise<string> {
    return getBody(this.core.pods(name).exec.post({ qs: opts }));
  }

  public async attach(name: string, opts: AttachOptions): Promise<void> {
    const flags: string[] = ["attach", name, ...this.configFlags];

    if (opts.stdin) flags.push("--stdin");
    if (opts.tty) flags.push("--tty");
    if (opts.container) flags.push("--container", opts.container);

    await execa("kubectl", flags, {
      stdin: opts.stdin,
      stdout: opts.stdout,
      stderr: opts.stderr
    });
  }

  public async connect(name: string, opts: ConnectOptions): Promise<void> {
    const flags: string[] = ["exec", name, ...this.configFlags];

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
   * Helpers
   */

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
