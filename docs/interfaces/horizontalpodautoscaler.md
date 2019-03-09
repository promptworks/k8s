[@promptly/k8s](../README.md) > [Horizontalpodautoscaler](../interfaces/horizontalpodautoscaler.md)

# Interface: Horizontalpodautoscaler

configuration of a horizontal pod autoscaler.

## Hierarchy

**Horizontalpodautoscaler**

## Indexable

\[k: `string`\]:&nbsp;`any`
configuration of a horizontal pod autoscaler.

## Index

### Properties

* [apiVersion](horizontalpodautoscaler.md#apiversion)
* [kind](horizontalpodautoscaler.md#kind)
* [metadata](horizontalpodautoscaler.md#metadata)
* [spec](horizontalpodautoscaler.md#spec)
* [status](horizontalpodautoscaler.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`string` \| `null`*

*Defined in [types/gen/horizontalpodautoscaler.ts:81](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/horizontalpodautoscaler.ts#L81)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`string` \| `null`*

*Defined in [types/gen/horizontalpodautoscaler.ts:41](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/horizontalpodautoscaler.ts#L41)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/horizontalpodautoscaler.ts:85](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/horizontalpodautoscaler.ts#L85)*

Standard object metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/horizontalpodautoscaler.ts:45](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/horizontalpodautoscaler.ts#L45)*

behaviour of autoscaler. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status).

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/horizontalpodautoscaler.ts:15](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/horizontalpodautoscaler.ts#L15)*

current information about the autoscaler.

___

