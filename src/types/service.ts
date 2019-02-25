/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 */
export interface Service {
  /**
   * Most recently observed status of the service. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  status?: {
    /**
     * LoadBalancer contains the current status of the load-balancer, if one is present.
     */
    loadBalancer?: {
      /**
       * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
       */
      ingress?: {
        /**
         * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
         */
        ip?: string;
        /**
         * Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
         */
        hostname?: string;
        [k: string]: any;
      }[];
      [k: string]: any;
    };
    [k: string]: any;
  };
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  kind?: string | null;
  /**
   * Spec defines the behavior of a service. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
   */
  spec?: {
    /**
     * Only applies to Service Type: LoadBalancer LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.
     */
    loadBalancerIP?: string;
    /**
     * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/
     */
    loadBalancerSourceRanges?: string[];
    /**
     * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
     */
    externalIPs?: string[];
    /**
     * externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. "Local" preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. "Cluster" obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading.
     */
    externalTrafficPolicy?: string;
    /**
     * healthCheckNodePort specifies the healthcheck nodePort for the service. If not specified, HealthCheckNodePort is created by the service api backend with the allocated nodePort. Will use user-specified nodePort value if specified by the client. Only effects when Type is set to LoadBalancer and ExternalTrafficPolicy is set to Local.
     */
    healthCheckNodePort?: number;
    /**
     * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
     */
    selector?: {
      [k: string]: string;
    };
    /**
     * externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service. No proxying will be involved. Must be a valid RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires Type to be ExternalName.
     */
    externalName?: string;
    /**
     * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     */
    sessionAffinity?: string;
    /**
     * clusterIP is the IP address of the service and is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. This field can not be changed through updates. Valid values are "None", empty string (""), or a valid IP address. "None" can be specified for headless services when proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     */
    clusterIP?: string;
    /**
     * sessionAffinityConfig contains the configurations of session affinity.
     */
    sessionAffinityConfig?: {
      /**
       * clientIP contains the configurations of Client IP based session affinity.
       */
      clientIP?: {
        /**
         * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
         */
        timeoutSeconds?: number;
        [k: string]: any;
      };
      [k: string]: any;
    };
    /**
     * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ExternalName" maps to the specified externalName. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a stable IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the clusterIP. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services---service-types
     */
    type?: string;
    /**
     * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     */
    ports?: {
      /**
       * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
       */
      protocol?: string;
      /**
       * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
       */
      targetPort?: string | number;
      /**
       * The port that will be exposed by this service.
       */
      port: number;
      /**
       * The port on each node on which this service is exposed when type=NodePort or LoadBalancer. Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the ServiceType of this Service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
       */
      nodePort?: number;
      /**
       * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. This maps to the 'Name' field in EndpointPort objects. Optional if only one ServicePort is defined on this service.
       */
      name?: string;
      [k: string]: any;
    }[];
    /**
     * publishNotReadyAddresses, when set to true, indicates that DNS implementations must publish the notReadyAddresses of subsets for the Endpoints associated with the Service. The default value is false. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate SRV records for its Pods without respect to their readiness for purpose of peer discovery.
     */
    publishNotReadyAddresses?: boolean;
    [k: string]: any;
  };
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  apiVersion?: string | null;
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   */
  metadata?: {
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed.
     */
    finalizers?: string[];
    /**
     * The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.
     */
    clusterName?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
       */
      uid: string;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
       */
      name: string;
      [k: string]: any;
    }[];
    /**
     * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
     *
     * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     */
    creationTimestamp?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     */
    uid?: string;
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
     */
    name?: string;
    /**
     * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
     *
     * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     */
    deletionTimestamp?: string;
    /**
     * Namespace defines the space within each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
     */
    namespace?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * An initializer is a controller which enforces some system invariant at object creation time. This field is a list of initializers that have not yet acted on this object. If nil or empty, this object has been completely initialized. Otherwise, the object is considered uninitialized and is hidden (in list/watch and get calls) from clients that haven't explicitly asked to observe uninitialized objects.
     *
     * When an object is created, the system will populate this list with the current set of initializers. Only privileged users may set or modify this list. Once it is empty, it may not be modified further by any user.
     */
    initializers?: {
      /**
       * If result is set with the Failure field, the object will be persisted to storage and then deleted, ensuring that other clients can observe the deletion.
       */
      result?: {
        /**
         * Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
         */
        status?: string;
        /**
         * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
         */
        kind?: string;
        /**
         * Suggested HTTP return code for this status, 0 if not set.
         */
        code?: number;
        /**
         * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
         */
        apiVersion?: string;
        /**
         * A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
         */
        reason?: string;
        /**
         * Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.
         */
        details?: {
          /**
           * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
           */
          kind?: string;
          /**
           * The group attribute of the resource associated with the status StatusReason.
           */
          group?: string;
          /**
           * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
           */
          name?: string;
          /**
           * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
           */
          retryAfterSeconds?: number;
          /**
           * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
           */
          causes?: {
            /**
             * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.
             *
             * Examples:
             *   "name" - the field "name" on the current resource
             *   "items[0].name" - the field "name" on the first array entry in "items"
             */
            field?: string;
            /**
             * A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
             */
            message?: string;
            /**
             * A machine-readable description of the cause of the error. If this value is empty there is no information available.
             */
            reason?: string;
            [k: string]: any;
          }[];
          /**
           * UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids
           */
          uid?: string;
          [k: string]: any;
        };
        /**
         * A human-readable description of the status of this operation.
         */
        message?: string;
        /**
         * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
         */
        metadata?: {
          /**
           * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
           */
          continue?: string;
          /**
           * selfLink is a URL representing this object. Populated by the system. Read-only.
           */
          selfLink?: string;
          /**
           * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
           */
          resourceVersion?: string;
          [k: string]: any;
        };
        [k: string]: any;
      };
      /**
       * Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients.
       */
      pending: {
        /**
         * name of the process that is responsible for initializing this object.
         */
        name: string;
        [k: string]: any;
      }[];
      [k: string]: any;
    };
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * SelfLink is a URL representing this object. Populated by the system. Read-only.
     */
    selfLink?: string;
    [k: string]: any;
  };
  [k: string]: any;
}
