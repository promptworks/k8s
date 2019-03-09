[@promptly/k8s](../README.md) > [Kubectl](../classes/kubectl.md)

# Class: Kubectl

## Hierarchy

**Kubectl**

## Index

### Constructors

* [constructor](kubectl.md#constructor)

### Methods

* [apply](kubectl.md#apply)
* [attach](kubectl.md#attach)
* [exec](kubectl.md#exec)
* [run](kubectl.md#run)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Kubectl**(options?: *[Flags](../interfaces/flags.md)*): [Kubectl](kubectl.md)

*Defined in [Kubectl.ts:30](https://github.com/rzane/k8s/blob/67fb0bc/src/Kubectl.ts#L30)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` options | [Flags](../interfaces/flags.md) |  {} |

**Returns:** [Kubectl](kubectl.md)

___

## Methods

<a id="apply"></a>

###  apply

▸ **apply**(objects: *[AnyObject](../#anyobject)[]*): `Promise`<`void`>

*Defined in [Kubectl.ts:46](https://github.com/rzane/k8s/blob/67fb0bc/src/Kubectl.ts#L46)*

Apply a configuration to a resource.

**Parameters:**

| Name | Type |
| ------ | ------ |
| objects | [AnyObject](../#anyobject)[] |

**Returns:** `Promise`<`void`>

___
<a id="attach"></a>

###  attach

▸ **attach**(pod: *`string`*, opts?: *[AttachOptions](../interfaces/attachoptions.md)*): `Promise`<`void`>

*Defined in [Kubectl.ts:55](https://github.com/rzane/k8s/blob/67fb0bc/src/Kubectl.ts#L55)*

Attach to a running container.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| pod | `string` | - |
| `Default value` opts | [AttachOptions](../interfaces/attachoptions.md) |  {} |

**Returns:** `Promise`<`void`>

___
<a id="exec"></a>

###  exec

▸ **exec**(pod: *`string`*, opts?: *[ConnectOptions](../interfaces/connectoptions.md)*): `Promise`<`void`>

*Defined in [Kubectl.ts:72](https://github.com/rzane/k8s/blob/67fb0bc/src/Kubectl.ts#L72)*

Establish an interactive `exec` session with a running container.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| pod | `string` | - |
| `Default value` opts | [ConnectOptions](../interfaces/connectoptions.md) |  {} |

**Returns:** `Promise`<`void`>

___
<a id="run"></a>

###  run

▸ **run**(args: *`string`[]*, opts?: *`Options`*): `ChildProcess` & `ExecaChildPromise` & `Promise`<`ExecaReturns`>

*Defined in [Kubectl.ts:39](https://github.com/rzane/k8s/blob/67fb0bc/src/Kubectl.ts#L39)*

Run an arbitrary shell command.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| args | `string`[] | - |
| `Default value` opts | `Options` |  {} |

**Returns:** `ChildProcess` & `ExecaChildPromise` & `Promise`<`ExecaReturns`>

___

