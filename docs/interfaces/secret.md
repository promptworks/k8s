[@promptly/k8s](../README.md) > [Secret](../interfaces/secret.md)

# Interface: Secret

Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.

## Hierarchy

**Secret**

## Indexable

\[k: `string`\]:&nbsp;`any`
Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.

## Index

### Properties

* [apiVersion](secret.md#apiversion)
* [data](secret.md#data)
* [kind](secret.md#kind)
* [metadata](secret.md#metadata)
* [stringData](secret.md#stringdata)
* [type](secret.md#type)

---

## Properties

<a id="apiversion"></a>

### `<Optional>` apiVersion

**● apiVersion**: *`string` \| `null`*

*Defined in [types/gen/secret.ts:25](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/secret.ts#L25)*

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#resources](https://git.k8s.io/community/contributors/devel/api-conventions.md#resources)

___
<a id="data"></a>

### `<Optional>` data

**● data**: *`undefined` \| `object`*

*Defined in [types/gen/secret.ts:19](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/secret.ts#L19)*

Data contains the secret data. Each key must consist of alphanumeric characters, '-', '\_' or '.'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in [https://tools.ietf.org/html/rfc4648#section-4](https://tools.ietf.org/html/rfc4648#section-4)

___
<a id="kind"></a>

### `<Optional>` kind

**● kind**: *`string` \| `null`*

*Defined in [types/gen/secret.ts:15](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/secret.ts#L15)*

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds](https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds)

___
<a id="metadata"></a>

### `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types/gen/secret.ts:39](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/secret.ts#L39)*

Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata](https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata)

___
<a id="stringdata"></a>

### `<Optional>` stringData

**● stringData**: *`undefined` \| `object`*

*Defined in [types/gen/secret.ts:29](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/secret.ts#L29)*

stringData allows specifying non-binary secret data in string form. It is provided as a write-only convenience method. All keys and values are merged into the data field on write, overwriting any existing values. It is never output when reading from the API.

___
<a id="type"></a>

### `<Optional>` type

**● type**: *`string` \| `null`*

*Defined in [types/gen/secret.ts:35](https://github.com/rzane/k8s/blob/67fb0bc/src/types/gen/secret.ts#L35)*

Used to facilitate programmatic handling of secret data.

___

