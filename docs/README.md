
@promptly/k8s
=============

A simple Kubernetes client for Node.js based on [`kubernetes-client`](https://github.com/godaddy/kubernetes-client).

Because some functionality isn't yet supported by `kubernetes-client`, this package also provides convenience methods for shelling out to `kubectl`.

[View the documentation](docs/README.md)

Installing
----------

```
$ yarn add @promptly/k8s
```

Usage
-----

```typescript
import { Kubernetes, Kubectl } from '@promptly/k8s';

// This is a wrapper around `kubernetes-client`
const kubernetes = new Kubernetes();

// This is a wrapper around `kubectl`
const kubectl = new Kubectl();
```

## Index

### Classes

* [API](classes/api.md)
* [Kubectl](classes/kubectl.md)
* [Kubernetes](classes/kubernetes.md)

### Interfaces

* [AttachOptions](interfaces/attachoptions.md)
* [Configmap](interfaces/configmap.md)
* [ConnectOptions](interfaces/connectoptions.md)
* [Cronjob](interfaces/cronjob.md)
* [Daemonset](interfaces/daemonset.md)
* [Deployment](interfaces/deployment.md)
* [ExecOptions](interfaces/execoptions.md)
* [Flags](interfaces/flags.md)
* [Horizontalpodautoscaler](interfaces/horizontalpodautoscaler.md)
* [Ingress](interfaces/ingress.md)
* [Job](interfaces/job.md)
* [LogOptions](interfaces/logoptions.md)
* [Namespace](interfaces/namespace.md)
* [Options](interfaces/options.md)
* [Persistentvolumeclaim](interfaces/persistentvolumeclaim.md)
* [Pod](interfaces/pod.md)
* [Replicaset](interfaces/replicaset.md)
* [Secret](interfaces/secret.md)
* [Service](interfaces/service.md)
* [Statefulset](interfaces/statefulset.md)

### Type aliases

* [AnyObject](#anyobject)
* [ConfigMap](#configmap)
* [CronJob](#cronjob)
* [DaemonSet](#daemonset)
* [DeepPartial](#deeppartial)
* [HorizontalPodAutoscaler](#horizontalpodautoscaler)
* [PersistentVolumeClaim](#persistentvolumeclaim)
* [ReplicaSet](#replicaset)
* [StatefulSet](#statefulset)

### Functions

* [exists](#exists)
* [getBody](#getbody)
* [getList](#getlist)

---

## Type aliases

<a id="anyobject"></a>

###  AnyObject

**Ƭ AnyObject**: *[ConfigMap](#configmap) \| [CronJob](#cronjob) \| [DaemonSet](#daemonset) \| [Deployment](interfaces/deployment.md) \| [Ingress](interfaces/ingress.md) \| [HorizontalPodAutoscaler](#horizontalpodautoscaler) \| [Job](interfaces/job.md) \| [Namespace](interfaces/namespace.md) \| [Pod](interfaces/pod.md) \| [ReplicaSet](#replicaset) \| [Secret](interfaces/secret.md) \| [Service](interfaces/service.md) \| [StatefulSet](#statefulset) \| [PersistentVolumeClaim](#persistentvolumeclaim) \| `GenericObject`*

*Defined in [types/objects.ts:32](https://github.com/rzane/k8s/blob/67fb0bc/src/types/objects.ts#L32)*

___
<a id="configmap"></a>

###  ConfigMap

**Ƭ ConfigMap**: *`Kind`<"ConfigMap", [Configmap](interfaces/configmap.md)>*

*Defined in [types/objects.ts:11](https://github.com/rzane/k8s/blob/67fb0bc/src/types/objects.ts#L11)*

___
<a id="cronjob"></a>

###  CronJob

**Ƭ CronJob**: *`Kind`<"CronJob", [Cronjob](interfaces/cronjob.md)>*

*Defined in [types/objects.ts:12](https://github.com/rzane/k8s/blob/67fb0bc/src/types/objects.ts#L12)*

___
<a id="daemonset"></a>

###  DaemonSet

**Ƭ DaemonSet**: *`Kind`<"DaemonSet", [Daemonset](interfaces/daemonset.md)>*

*Defined in [types/objects.ts:13](https://github.com/rzane/k8s/blob/67fb0bc/src/types/objects.ts#L13)*

___
<a id="deeppartial"></a>

###  DeepPartial

**Ƭ DeepPartial**: *`object`*

*Defined in [types/index.ts:4](https://github.com/rzane/k8s/blob/67fb0bc/src/types/index.ts#L4)*

#### Type declaration

___
<a id="horizontalpodautoscaler"></a>

###  HorizontalPodAutoscaler

**Ƭ HorizontalPodAutoscaler**: *`Kind`<"HorizontalPodAutoscaler", [Horizontalpodautoscaler](interfaces/horizontalpodautoscaler.md)>*

*Defined in [types/objects.ts:15](https://github.com/rzane/k8s/blob/67fb0bc/src/types/objects.ts#L15)*

___
<a id="persistentvolumeclaim"></a>

###  PersistentVolumeClaim

**Ƭ PersistentVolumeClaim**: *`Kind`<"PersistentVolumeClaim", [Persistentvolumeclaim](interfaces/persistentvolumeclaim.md)>*

*Defined in [types/objects.ts:27](https://github.com/rzane/k8s/blob/67fb0bc/src/types/objects.ts#L27)*

___
<a id="replicaset"></a>

###  ReplicaSet

**Ƭ ReplicaSet**: *`Kind`<"ReplicaSet", [Replicaset](interfaces/replicaset.md)>*

*Defined in [types/objects.ts:23](https://github.com/rzane/k8s/blob/67fb0bc/src/types/objects.ts#L23)*

___
<a id="statefulset"></a>

###  StatefulSet

**Ƭ StatefulSet**: *`Kind`<"StatefulSet", [Statefulset](interfaces/statefulset.md)>*

*Defined in [types/objects.ts:26](https://github.com/rzane/k8s/blob/67fb0bc/src/types/objects.ts#L26)*

___

## Functions

<a id="exists"></a>

### `<Const>` exists

▸ **exists**(promise: *`Promise`<`any`>*): `Promise`<`boolean`>

*Defined in [API.ts:15](https://github.com/rzane/k8s/blob/67fb0bc/src/API.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| promise | `Promise`<`any`> |

**Returns:** `Promise`<`boolean`>

___
<a id="getbody"></a>

### `<Const>` getBody

▸ **getBody**<`T`>(promise: *`Promise`<`object`>*): `Promise`<`T`>

*Defined in [API.ts:5](https://github.com/rzane/k8s/blob/67fb0bc/src/API.ts#L5)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| promise | `Promise`<`object`> |

**Returns:** `Promise`<`T`>

___
<a id="getlist"></a>

### `<Const>` getList

▸ **getList**<`T`>(promise: *`Promise`<`object`>*): `Promise`<`T`[]>

*Defined in [API.ts:9](https://github.com/rzane/k8s/blob/67fb0bc/src/API.ts#L9)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| promise | `Promise`<`object`> |

**Returns:** `Promise`<`T`[]>

___

