[@promptly/k8s](../README.md) > [Pod](../interfaces/pod.md)

# Interface: Pod

Deprecated. Please use io.k8s.api.core.v1.Pod instead.

## Hierarchy

**Pod**

## Indexable

\[k: `string`\]:&nbsp;`any`
Deprecated. Please use io.k8s.api.core.v1.Pod instead.

## Index

### Properties

* [apiVersion](pod.md#apiversion)
* [kind](pod.md#kind)
* [metadata](pod.md#metadata)
* [spec](pod.md#spec)
* [status](pod.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`undefined` \| `string`*

*Defined in [types/gen/pod.ts:3120](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/pod.ts#L3120)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`undefined` \| `string`*

*Defined in [types/gen/pod.ts:403](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/pod.ts#L403)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/pod.ts:3124](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/pod.ts#L3124)*

Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/pod.ts:407](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/pod.ts#L407)*

Specification of the desired behavior of the pod. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/pod.ts:15](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/pod.ts#L15)*

Most recently observed status of the pod. This data may not be up to date. Populated by the system. Read-only. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___

