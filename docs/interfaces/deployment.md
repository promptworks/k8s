[@promptly/k8s](../README.md) > [Deployment](../interfaces/deployment.md)

# Interface: Deployment

Deprecated. Please use io.k8s.api.apps.v1beta1.Deployment instead.

## Hierarchy

**Deployment**

## Indexable

\[k: `string`\]:&nbsp;`any`
Deprecated. Please use io.k8s.api.apps.v1beta1.Deployment instead.

## Index

### Properties

* [apiVersion](deployment.md#apiversion)
* [kind](deployment.md#kind)
* [metadata](deployment.md#metadata)
* [spec](deployment.md#spec)
* [status](deployment.md#status)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`undefined` \| `string`*

*Defined in [types/gen/deployment.ts:3116](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/deployment.ts#L3116)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`undefined` \| `string`*

*Defined in [types/gen/deployment.ts:79](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/deployment.ts#L79)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/deployment.ts:3120](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/deployment.ts#L3120)*

Standard object metadata.

___
<a id="spec"></a>

### `<Optional>` spec

**● spec**: *`undefined` \| `object`*

*Defined in [types/gen/deployment.ts:83](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/deployment.ts#L83)*

Specification of the desired behavior of the Deployment.

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`undefined` \| `object`*

*Defined in [types/gen/deployment.ts:15](https://github.com/rzane/k8s/blob/0f3ff00/src/types/gen/deployment.ts#L15)*

Most recently observed status of the Deployment.

___

