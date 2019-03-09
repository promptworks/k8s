[@promptly/k8s](../README.md) > [Job](../interfaces/job.md)

# Interface: Job

Deprecated. Please use io.k8s.api.batch.v1.Job instead.

## Hierarchy

**Job**

## Indexable

\[k: `string`\]:&nbsp;`any`
Deprecated. Please use io.k8s.api.batch.v1.Job instead.

## Index

### Properties

* [apiVersion](job.md#apiversion)
* [kind](job.md#kind)
* [metadata](job.md#metadata)
* [spec](job.md#spec)
* [status](job.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`undefined` \| `string`*

*Defined in [types/gen/job.ts:3078](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/job.ts#L3078)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`undefined` \| `string`*

*Defined in [types/gen/job.ts:71](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/job.ts#L71)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/job.ts:3082](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/job.ts#L3082)*

Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/job.ts:75](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/job.ts#L75)*

Specification of the desired behavior of a job. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/job.ts:15](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/job.ts#L15)*

Current status of a job. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___

