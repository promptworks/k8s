/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * EnvVar represents an environment variable present in a Container.
 */
export interface Envvar {
  /**
   * EnvVarSource represents a source for the value of an EnvVar.
   */
  valueFrom?: {
    /**
     * SecretKeySelector selects a key of a Secret.
     */
    secretKeyRef?: {
      /**
       * Specify whether the Secret or it's key must be defined
       */
      optional?: boolean;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      name?: string | null;
      /**
       * The key of the secret to select from.  Must be a valid secret key.
       */
      key: string;
      [k: string]: any;
    };
    /**
     * ObjectFieldSelector selects an APIVersioned field of an object.
     */
    fieldRef?: {
      /**
       * Path of the field to select in the specified API version.
       */
      fieldPath: string;
      /**
       * Version of the schema the FieldPath is written in terms of, defaults to "v1".
       */
      apiVersion?: string | null;
      [k: string]: any;
    };
    /**
     * Selects a key from a ConfigMap.
     */
    configMapKeyRef?: {
      /**
       * Specify whether the ConfigMap or it's key must be defined
       */
      optional?: boolean;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      name?: string | null;
      /**
       * The key to select.
       */
      key: string;
      [k: string]: any;
    };
    /**
     * ResourceFieldSelector represents container resources (cpu, memory) and their output format
     */
    resourceFieldRef?: {
      /**
       * Container name: required for volumes, optional for env vars
       */
      containerName?: string | null;
      /**
       * Required: resource to select
       */
      resource: string;
      divisor?: (string | null) | number;
      [k: string]: any;
    };
    [k: string]: any;
  };
  /**
   * Name of the environment variable. Must be a C_IDENTIFIER.
   */
  name: string | null;
  /**
   * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
   */
  value?: string | null;
  [k: string]: any;
}
