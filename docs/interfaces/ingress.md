[@promptly/k8s](../README.md) > [Ingress](../interfaces/ingress.md)

# Interface: Ingress

Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.

## Hierarchy

**Ingress**

## Indexable

\[k: `string`\]:&nbsp;`any`
Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.

## Index

### Properties

* [apiVersion](ingress.md#apiversion)
* [kind](ingress.md#kind)
* [metadata](ingress.md#metadata)
* [spec](ingress.md#spec)
* [status](ingress.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`string` \| `null`*

*Defined in [types/gen/ingress.ts:124](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/ingress.ts#L124)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`string` \| `null`*

*Defined in [types/gen/ingress.ts:41](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/ingress.ts#L41)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/ingress.ts:128](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/ingress.ts#L128)*

Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/ingress.ts:45](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/ingress.ts#L45)*

Spec is the desired state of the Ingress. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/ingress.ts:15](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/ingress.ts#L15)*

Status is the current state of the Ingress. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___

