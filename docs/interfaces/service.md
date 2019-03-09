[@promptly/k8s](../README.md) > [Service](../interfaces/service.md)

# Interface: Service

Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.

## Hierarchy

**Service**

## Indexable

\[k: `string`\]:&nbsp;`any`
Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.

## Index

### Properties

* [apiVersion](service.md#apiversion)
* [kind](service.md#kind)
* [metadata](service.md#metadata)
* [spec](service.md#spec)
* [status](service.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`string` \| `null`*

*Defined in [types/gen/service.ts:139](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/service.ts#L139)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`string` \| `null`*

*Defined in [types/gen/service.ts:41](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/service.ts#L41)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/service.ts:143](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/service.ts#L143)*

Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/service.ts:45](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/service.ts#L45)*

Spec defines the behavior of a service. [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/service.ts:15](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/service.ts#L15)*

Most recently observed status of the service. Populated by the system. Read-only. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___

