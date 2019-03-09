[@promptly/k8s](../README.md) > [Daemonset](../interfaces/daemonset.md)

# Interface: Daemonset

Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSet instead.

## Hierarchy

**Daemonset**

## Indexable

\[k: `string`\]:&nbsp;`any`
Deprecated. Please use io.k8s.api.extensions.v1beta1.DaemonSet instead.

## Index

### Properties

* [apiVersion](daemonset.md#apiversion)
* [kind](daemonset.md#kind)
* [metadata](daemonset.md#metadata)
* [spec](daemonset.md#spec)
* [status](daemonset.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`undefined` \| `string`*

*Defined in [types/gen/daemonset.ts:3098](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/daemonset.ts#L3098)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`undefined` \| `string`*

*Defined in [types/gen/daemonset.ts:83](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/daemonset.ts#L83)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/daemonset.ts:3102](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/daemonset.ts#L3102)*

Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/daemonset.ts:87](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/daemonset.ts#L87)*

The desired behavior of this daemon set. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/daemonset.ts:15](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/daemonset.ts#L15)*

The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___

