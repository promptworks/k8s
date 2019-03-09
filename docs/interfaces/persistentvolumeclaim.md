[@promptly/k8s](../README.md) > [Persistentvolumeclaim](../interfaces/persistentvolumeclaim.md)

# Interface: Persistentvolumeclaim

PersistentVolumeClaim is a user's request for and claim to a persistent volume

## Hierarchy

**Persistentvolumeclaim**

## Indexable

\[k: `string`\]:&nbsp;`any`
PersistentVolumeClaim is a user's request for and claim to a persistent volume

## Index

### Properties

* [apiVersion](persistentvolumeclaim.md#apiversion)
* [kind](persistentvolumeclaim.md#kind)
* [metadata](persistentvolumeclaim.md#metadata)
* [spec](persistentvolumeclaim.md#spec)
* [status](persistentvolumeclaim.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`string` \| `null`*

*Defined in [types/gen/persistentvolumeclaim.ts:151](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/persistentvolumeclaim.ts#L151)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`string` \| `null`*

*Defined in [types/gen/persistentvolumeclaim.ts:59](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/persistentvolumeclaim.ts#L59)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/persistentvolumeclaim.ts:155](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/persistentvolumeclaim.ts#L155)*

Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/persistentvolumeclaim.ts:63](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/persistentvolumeclaim.ts#L63)*

Spec defines the desired characteristics of a volume requested by a pod author. More info: [https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims](https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims)

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/persistentvolumeclaim.ts:15](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/persistentvolumeclaim.ts#L15)*

Status represents the current information/status of a persistent volume claim. Read-only. More info: [https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims](https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims)

___

