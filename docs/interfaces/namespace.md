[@promptly/k8s](../README.md) > [Namespace](../interfaces/namespace.md)

# Interface: Namespace

Deprecated. Please use io.k8s.api.core.v1.Namespace instead.

## Hierarchy

**Namespace**

## Indexable

\[k: `string`\]:&nbsp;`any`
Deprecated. Please use io.k8s.api.core.v1.Namespace instead.

## Index

### Properties

* [apiVersion](namespace.md#apiversion)
* [kind](namespace.md#kind)
* [metadata](namespace.md#metadata)
* [spec](namespace.md#spec)
* [status](namespace.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`undefined` \| `string`*

*Defined in [types/gen/namespace.ts:39](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/namespace.ts#L39)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`undefined` \| `string`*

*Defined in [types/gen/namespace.ts:25](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/namespace.ts#L25)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/namespace.ts:43](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/namespace.ts#L43)*

Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/namespace.ts:29](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/namespace.ts#L29)*

Spec defines the behavior of the Namespace. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/namespace.ts:15](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/namespace.ts#L15)*

Status describes the current status of a Namespace. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___

