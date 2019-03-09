[@promptly/k8s](../README.md) > [Statefulset](../interfaces/statefulset.md)

# Interface: Statefulset

DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:

*   Network: A single stable DNS and hostname.
*   Storage: As many VolumeClaims as requested. The StatefulSet guarantees that a given network identity will always map to the same storage identity.

## Hierarchy

**Statefulset**

## Indexable

\[k: `string`\]:&nbsp;`any`
DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:

*   Network: A single stable DNS and hostname.
*   Storage: As many VolumeClaims as requested. The StatefulSet guarantees that a given network identity will always map to the same storage identity.

## Index

### Properties

* [apiVersion](statefulset.md#apiversion)
* [kind](statefulset.md#kind)
* [metadata](statefulset.md#metadata)
* [spec](statefulset.md#spec)
* [status](statefulset.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`string` \| `null`*

*Defined in [types/gen/statefulset.ts:3471](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/statefulset.ts#L3471)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`string` \| `null`*

*Defined in [types/gen/statefulset.ts:82](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/statefulset.ts#L82)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/statefulset.ts:3475](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/statefulset.ts#L3475)*

ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/statefulset.ts:86](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/statefulset.ts#L86)*

Spec defines the desired identities of pods in this set.

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/statefulset.ts:18](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/statefulset.ts#L18)*

Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.

___

