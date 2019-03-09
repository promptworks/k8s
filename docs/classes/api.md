[@promptly/k8s](../README.md) > [API](../classes/api.md)

# Class: API

## Hierarchy

**API**

↳  [Kubernetes](kubernetes.md)

## Index

### Constructors

* [constructor](api.md#constructor)

### Properties

* [context](api.md#context)
* [kubeconfig](api.md#kubeconfig)
* [namespace](api.md#namespace)

### Methods

* [exec](api.md#exec)
* [followLogs](api.md#followlogs)
* [getLogs](api.md#getlogs)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new API**(__namedParameters?: *`object`*): [API](api.md)

*Defined in [API.ts:32](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L32)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` __namedParameters | `object` |  {} |

**Returns:** [API](api.md)

___

## Properties

<a id="context"></a>

### `<Optional>` context

**● context**: *`undefined` \| `string`*

*Defined in [API.ts:30](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L30)*

___
<a id="kubeconfig"></a>

###  kubeconfig

**● kubeconfig**: *`any`*

*Defined in [API.ts:28](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L28)*

___
<a id="namespace"></a>

###  namespace

**● namespace**: *`string`*

*Defined in [API.ts:29](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L29)*

___

## Methods

<a id="exec"></a>

###  exec

▸ **exec**(name: *`string`*, opts?: *[ExecOptions](../interfaces/execoptions.md)*): `Promise`<`string`>

*Defined in [API.ts:76](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L76)*

Run a single command and return the output as a string.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| name | `string` | - |
| `Default value` opts | [ExecOptions](../interfaces/execoptions.md) |  {} |

**Returns:** `Promise`<`string`>

___
<a id="followlogs"></a>

###  followLogs

▸ **followLogs**(name: *`string`*, opts?: *[LogOptions](../interfaces/logoptions.md)*): `Stream`

*Defined in [API.ts:64](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L64)*

Get a log stream from a running container.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| name | `string` | - |
| `Default value` opts | [LogOptions](../interfaces/logoptions.md) |  {} |

**Returns:** `Stream`

___
<a id="getlogs"></a>

###  getLogs

▸ **getLogs**(name: *`string`*, opts?: *[LogOptions](../interfaces/logoptions.md)*): `Promise`<`string`>

*Defined in [API.ts:52](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L52)*

Get the logs from a container, and return them as a string.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| name | `string` | - |
| `Default value` opts | [LogOptions](../interfaces/logoptions.md) |  {} |

**Returns:** `Promise`<`string`>

___

