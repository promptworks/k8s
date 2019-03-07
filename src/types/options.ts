import * as k8s from "kubernetes-client";
import { Kubectl } from "../Kubectl";
import { Stream } from "stream";

export interface Options {
  namespace?: string;
  kubeconfig?: string;
  context?: string;
  kubectl?: Kubectl;
  client?: k8s.ApiRoot;
}

export interface Flags {
  [key: string]: string | boolean | null | undefined;
}

export interface LogOptions {
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
