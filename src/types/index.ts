export * from "./objects";

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P]
};

export interface Options {
  namespace?: string;
  kubeconfig?: string;
  context?: string;
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
  stderr?: NodeJS.WriteStream;
  stdin?: NodeJS.ReadStream;
  stdout?: NodeJS.WriteStream;
  tty?: boolean;
}

export interface ConnectOptions extends AttachOptions {
  command?: string[];
}
