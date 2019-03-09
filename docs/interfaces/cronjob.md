[@promptly/k8s](../README.md) > [Cronjob](../interfaces/cronjob.md)

# Interface: Cronjob

CronJob represents the configuration of a single cron job.

## Hierarchy

**Cronjob**

## Indexable

\[k: `string`\]:&nbsp;`any`
CronJob represents the configuration of a single cron job.

## Index

### Properties

* [apiVersion](cronjob.md#apiversion)
* [kind](cronjob.md#kind)
* [metadata](cronjob.md#metadata)
* [spec](cronjob.md#spec)
* [status](cronjob.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`string` \| `null`*

*Defined in [types/gen/cronjob.ts:3326](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/cronjob.ts#L3326)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`string` \| `null`*

*Defined in [types/gen/cronjob.ts:59](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/cronjob.ts#L59)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/cronjob.ts:3330](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/cronjob.ts#L3330)*

Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/cronjob.ts:63](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/cronjob.ts#L63)*

Specification of the desired behavior of a cron job, including the schedule. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/cronjob.ts:15](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/cronjob.ts#L15)*

Current status of a cron job. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___

