/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
export interface Probe {
  /**
   * HTTPGetAction describes an action based on HTTP Get requests.
   */
  httpGet?: {
    /**
     * Path to access on the HTTP server.
     */
    path?: string | null;
    /**
     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
     */
    host?: string | null;
    /**
     * Scheme to use for connecting to the host. Defaults to HTTP.
     */
    scheme?: string | null;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers.
     */
    httpHeaders?: {
      /**
       * The header field name
       */
      name: string;
      /**
       * The header field value
       */
      value: string;
      [k: string]: any;
    }[];
    port: (string | null) | number;
    [k: string]: any;
  };
  /**
   * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
  timeoutSeconds?: number;
  /**
   * ExecAction describes a "run in container" action.
   */
  exec?: {
    /**
     * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
     */
    command?: (string | null)[];
    [k: string]: any;
  };
  /**
   * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
  initialDelaySeconds?: number;
  /**
   * TCPSocketAction describes an action based on opening a socket
   */
  tcpSocket?: {
    /**
     * Optional: Host name to connect to, defaults to the pod IP.
     */
    host?: string | null;
    port: (string | null) | number;
    [k: string]: any;
  };
  /**
   * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
   */
  periodSeconds?: number;
  /**
   * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
   */
  successThreshold?: number;
  /**
   * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
   */
  failureThreshold?: number;
  [k: string]: any;
}