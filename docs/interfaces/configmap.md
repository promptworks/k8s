[@promptly/k8s](../README.md) > [Configmap](../interfaces/configmap.md)

# Interface: Configmap

Deprecated. Please use io.k8s.api.core.v1.ConfigMap instead.

## Hierarchy

**Configmap**

## Indexable

\[k: `string`\]:&nbsp;`any`
Deprecated. Please use io.k8s.api.core.v1.ConfigMap instead.

## Index

### Properties

* [apiVersion](configmap.md#apiversion)
* [binaryData](configmap.md#binarydata)
* [data](configmap.md#data)
* [kind](configmap.md#kind)
* [metadata](configmap.md#metadata)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`undefined` \| `string`*

*Defined in [types/gen/configmap.ts:31](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/configmap.ts#L31)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="binarydata"></a>

### `<Optional>` binaryData

**● binaryData**: *`undefined` \| `object`*

*Defined in [types/gen/configmap.ts:25](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/configmap.ts#L25)*

BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '\_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet.

___
<a id="data"></a>

### `<Optional>` data

**● data**: *`undefined` \| `object`*

*Defined in [types/gen/configmap.ts:19](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/configmap.ts#L19)*

Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '\_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`undefined` \| `string`*

*Defined in [types/gen/configmap.ts:15](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/configmap.ts#L15)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/configmap.ts:35](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/configmap.ts#L35)*

Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___

