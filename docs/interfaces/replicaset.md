[@promptly/k8s](../README.md) > [Replicaset](../interfaces/replicaset.md)

# Interface: Replicaset

DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.

## Hierarchy

**Replicaset**

## Indexable

\[k: `string`\]:&nbsp;`any`
DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.

## Index

### Properties

* [apiVersion](replicaset.md#apiversion)
* [kind](replicaset.md#kind)
* [metadata](replicaset.md#metadata)
* [spec](replicaset.md#spec)
* [status](replicaset.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`string` \| `null`*

*Defined in [types/gen/replicaset.ts:3058](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/replicaset.ts#L3058)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`string` \| `null`*

*Defined in [types/gen/replicaset.ts:67](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/replicaset.ts#L67)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/replicaset.ts:3062](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/replicaset.ts#L3062)*

If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/replicaset.ts:71](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/replicaset.ts#L71)*

Spec defines the specification of the desired behavior of the ReplicaSet. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/replicaset.ts:15](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/replicaset.ts#L15)*

Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status)

___

