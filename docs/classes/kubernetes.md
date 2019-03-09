[@promptly/k8s](../README.md) > [Kubernetes](../classes/kubernetes.md)

# Class: Kubernetes

## Hierarchy

 [API](api.md)

**↳ Kubernetes**

## Index

### Constructors

* [constructor](kubernetes.md#constructor)

### Properties

* [context](kubernetes.md#context)
* [kubeconfig](kubernetes.md#kubeconfig)
* [namespace](kubernetes.md#namespace)

### Methods

* [createConfigMap](kubernetes.md#createconfigmap)
* [createCronJob](kubernetes.md#createcronjob)
* [createDaemonSet](kubernetes.md#createdaemonset)
* [createDeployment](kubernetes.md#createdeployment)
* [createHorizontalPodAutoscaler](kubernetes.md#createhorizontalpodautoscaler)
* [createIngress](kubernetes.md#createingress)
* [createJob](kubernetes.md#createjob)
* [createNamespace](kubernetes.md#createnamespace)
* [createPersistentVolumeClaim](kubernetes.md#createpersistentvolumeclaim)
* [createPod](kubernetes.md#createpod)
* [createReplicaSet](kubernetes.md#createreplicaset)
* [createSecret](kubernetes.md#createsecret)
* [createService](kubernetes.md#createservice)
* [deleteConfigMap](kubernetes.md#deleteconfigmap)
* [deleteCronJob](kubernetes.md#deletecronjob)
* [deleteDaemonSet](kubernetes.md#deletedaemonset)
* [deleteDeployment](kubernetes.md#deletedeployment)
* [deleteHorizontalPodAutoscaler](kubernetes.md#deletehorizontalpodautoscaler)
* [deleteIngress](kubernetes.md#deleteingress)
* [deleteJob](kubernetes.md#deletejob)
* [deleteNamespace](kubernetes.md#deletenamespace)
* [deletePersistentVolumeClaim](kubernetes.md#deletepersistentvolumeclaim)
* [deletePod](kubernetes.md#deletepod)
* [deleteReplicaSet](kubernetes.md#deletereplicaset)
* [deleteSecret](kubernetes.md#deletesecret)
* [deleteService](kubernetes.md#deleteservice)
* [exec](kubernetes.md#exec)
* [followLogs](kubernetes.md#followlogs)
* [getConfigMap](kubernetes.md#getconfigmap)
* [getCronJob](kubernetes.md#getcronjob)
* [getDaemonSet](kubernetes.md#getdaemonset)
* [getDeployment](kubernetes.md#getdeployment)
* [getHorizontalPodAutoscaler](kubernetes.md#gethorizontalpodautoscaler)
* [getIngress](kubernetes.md#getingress)
* [getJob](kubernetes.md#getjob)
* [getLogs](kubernetes.md#getlogs)
* [getNamespace](kubernetes.md#getnamespace)
* [getPersistentVolumeClaim](kubernetes.md#getpersistentvolumeclaim)
* [getPod](kubernetes.md#getpod)
* [getReplicaSet](kubernetes.md#getreplicaset)
* [getSecret](kubernetes.md#getsecret)
* [getService](kubernetes.md#getservice)
* [hasConfigMap](kubernetes.md#hasconfigmap)
* [hasCronJob](kubernetes.md#hascronjob)
* [hasDaemonSet](kubernetes.md#hasdaemonset)
* [hasDeployment](kubernetes.md#hasdeployment)
* [hasHorizontalPodAutoscaler](kubernetes.md#hashorizontalpodautoscaler)
* [hasIngress](kubernetes.md#hasingress)
* [hasJob](kubernetes.md#hasjob)
* [hasNamespace](kubernetes.md#hasnamespace)
* [hasPersistentVolumeClaim](kubernetes.md#haspersistentvolumeclaim)
* [hasPod](kubernetes.md#haspod)
* [hasReplicaSet](kubernetes.md#hasreplicaset)
* [hasSecret](kubernetes.md#hassecret)
* [hasService](kubernetes.md#hasservice)
* [listConfigMaps](kubernetes.md#listconfigmaps)
* [listCronJobs](kubernetes.md#listcronjobs)
* [listDaemonSets](kubernetes.md#listdaemonsets)
* [listDeployments](kubernetes.md#listdeployments)
* [listHorizontalPodAutoscalers](kubernetes.md#listhorizontalpodautoscalers)
* [listIngresses](kubernetes.md#listingresses)
* [listJobs](kubernetes.md#listjobs)
* [listNamespaces](kubernetes.md#listnamespaces)
* [listPersistentVolumeClaims](kubernetes.md#listpersistentvolumeclaims)
* [listPods](kubernetes.md#listpods)
* [listReplicaSets](kubernetes.md#listreplicasets)
* [listSecrets](kubernetes.md#listsecrets)
* [listServices](kubernetes.md#listservices)
* [patchConfigMap](kubernetes.md#patchconfigmap)
* [patchCronJob](kubernetes.md#patchcronjob)
* [patchDaemonSet](kubernetes.md#patchdaemonset)
* [patchDeployment](kubernetes.md#patchdeployment)
* [patchHorizontalPodAutoscaler](kubernetes.md#patchhorizontalpodautoscaler)
* [patchIngress](kubernetes.md#patchingress)
* [patchJob](kubernetes.md#patchjob)
* [patchNamespace](kubernetes.md#patchnamespace)
* [patchPersistentVolumeClaim](kubernetes.md#patchpersistentvolumeclaim)
* [patchPod](kubernetes.md#patchpod)
* [patchReplicaSet](kubernetes.md#patchreplicaset)
* [patchSecret](kubernetes.md#patchsecret)
* [patchService](kubernetes.md#patchservice)
* [replaceConfigMap](kubernetes.md#replaceconfigmap)
* [replaceCronJob](kubernetes.md#replacecronjob)
* [replaceDaemonSet](kubernetes.md#replacedaemonset)
* [replaceDeployment](kubernetes.md#replacedeployment)
* [replaceHorizontalPodAutoscaler](kubernetes.md#replacehorizontalpodautoscaler)
* [replaceIngress](kubernetes.md#replaceingress)
* [replaceJob](kubernetes.md#replacejob)
* [replaceNamespace](kubernetes.md#replacenamespace)
* [replacePersistentVolumeClaim](kubernetes.md#replacepersistentvolumeclaim)
* [replacePod](kubernetes.md#replacepod)
* [replaceReplicaSet](kubernetes.md#replacereplicaset)
* [replaceSecret](kubernetes.md#replacesecret)
* [replaceService](kubernetes.md#replaceservice)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Kubernetes**(__namedParameters?: *`object`*): [Kubernetes](kubernetes.md)

*Inherited from [API](api.md).[constructor](api.md#constructor)*

*Defined in [API.ts:32](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L32)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` __namedParameters | `object` |  {} |

**Returns:** [Kubernetes](kubernetes.md)

___

## Properties

<a id="context"></a>

### `<Optional>` context

**● context**: *`undefined` \| `string`*

*Inherited from [API](api.md).[context](api.md#context)*

*Defined in [API.ts:30](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L30)*

___
<a id="kubeconfig"></a>

###  kubeconfig

**● kubeconfig**: *`any`*

*Inherited from [API](api.md).[kubeconfig](api.md#kubeconfig)*

*Defined in [API.ts:28](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L28)*

___
<a id="namespace"></a>

###  namespace

**● namespace**: *`string`*

*Inherited from [API](api.md).[namespace](api.md#namespace)*

*Defined in [API.ts:29](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L29)*

___

## Methods

<a id="createconfigmap"></a>

###  createConfigMap

▸ **createConfigMap**(resource: *[ConfigMap](../#configmap)*): `Promise`<[ConfigMap](../#configmap)>

*Defined in [Kubernetes.ts:179](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L179)*

Create a new ConfigMap

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [ConfigMap](../#configmap) |

**Returns:** `Promise`<[ConfigMap](../#configmap)>

___
<a id="createcronjob"></a>

###  createCronJob

▸ **createCronJob**(resource: *[CronJob](../#cronjob)*): `Promise`<[CronJob](../#cronjob)>

*Defined in [Kubernetes.ts:838](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L838)*

Create a new CronJob

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [CronJob](../#cronjob) |

**Returns:** `Promise`<[CronJob](../#cronjob)>

___
<a id="createdaemonset"></a>

###  createDaemonSet

▸ **createDaemonSet**(resource: *[DaemonSet](../#daemonset)*): `Promise`<[DaemonSet](../#daemonset)>

*Defined in [Kubernetes.ts:590](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L590)*

Create a new DaemonSet

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [DaemonSet](../#daemonset) |

**Returns:** `Promise`<[DaemonSet](../#daemonset)>

___
<a id="createdeployment"></a>

###  createDeployment

▸ **createDeployment**(resource: *[Deployment](../interfaces/deployment.md)*): `Promise`<[Deployment](../interfaces/deployment.md)>

*Defined in [Kubernetes.ts:263](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L263)*

Create a new Deployment

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [Deployment](../interfaces/deployment.md) |

**Returns:** `Promise`<[Deployment](../interfaces/deployment.md)>

___
<a id="createhorizontalpodautoscaler"></a>

###  createHorizontalPodAutoscaler

▸ **createHorizontalPodAutoscaler**(resource: *[HorizontalPodAutoscaler](../#horizontalpodautoscaler)*): `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)>

*Defined in [Kubernetes.ts:925](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L925)*

Create a new HorizontalPodAutoscaler

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [HorizontalPodAutoscaler](../#horizontalpodautoscaler) |

**Returns:** `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)>

___
<a id="createingress"></a>

###  createIngress

▸ **createIngress**(resource: *[Ingress](../interfaces/ingress.md)*): `Promise`<[Ingress](../interfaces/ingress.md)>

*Defined in [Kubernetes.ts:349](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L349)*

Create a new Ingress

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [Ingress](../interfaces/ingress.md) |

**Returns:** `Promise`<[Ingress](../interfaces/ingress.md)>

___
<a id="createjob"></a>

###  createJob

▸ **createJob**(resource: *[Job](../interfaces/job.md)*): `Promise`<[Job](../interfaces/job.md)>

*Defined in [Kubernetes.ts:760](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L760)*

Create a new Job

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [Job](../interfaces/job.md) |

**Returns:** `Promise`<[Job](../interfaces/job.md)>

___
<a id="createnamespace"></a>

###  createNamespace

▸ **createNamespace**(resource: *[Namespace](../interfaces/namespace.md)*): `Promise`<[Namespace](../interfaces/namespace.md)>

*Defined in [Kubernetes.ts:41](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L41)*

Create a new Namespace

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [Namespace](../interfaces/namespace.md) |

**Returns:** `Promise`<[Namespace](../interfaces/namespace.md)>

___
<a id="createpersistentvolumeclaim"></a>

###  createPersistentVolumeClaim

▸ **createPersistentVolumeClaim**(resource: *[PersistentVolumeClaim](../#persistentvolumeclaim)*): `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)>

*Defined in [Kubernetes.ts:1017](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L1017)*

Create a new PersistentVolumeClaim

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [PersistentVolumeClaim](../#persistentvolumeclaim) |

**Returns:** `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)>

___
<a id="createpod"></a>

###  createPod

▸ **createPod**(resource: *[Pod](../interfaces/pod.md)*): `Promise`<[Pod](../interfaces/pod.md)>

*Defined in [Kubernetes.ts:103](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L103)*

Create a new Pod

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [Pod](../interfaces/pod.md) |

**Returns:** `Promise`<[Pod](../interfaces/pod.md)>

___
<a id="createreplicaset"></a>

###  createReplicaSet

▸ **createReplicaSet**(resource: *[ReplicaSet](../#replicaset)*): `Promise`<[ReplicaSet](../#replicaset)>

*Defined in [Kubernetes.ts:676](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L676)*

Create a new ReplicaSet

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [ReplicaSet](../#replicaset) |

**Returns:** `Promise`<[ReplicaSet](../#replicaset)>

___
<a id="createsecret"></a>

###  createSecret

▸ **createSecret**(resource: *[Secret](../interfaces/secret.md)*): `Promise`<[Secret](../interfaces/secret.md)>

*Defined in [Kubernetes.ts:430](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L430)*

Create a new Secret

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [Secret](../interfaces/secret.md) |

**Returns:** `Promise`<[Secret](../interfaces/secret.md)>

___
<a id="createservice"></a>

###  createService

▸ **createService**(resource: *[Service](../interfaces/service.md)*): `Promise`<[Service](../interfaces/service.md)>

*Defined in [Kubernetes.ts:509](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L509)*

Create a new Service

**Parameters:**

| Name | Type |
| ------ | ------ |
| resource | [Service](../interfaces/service.md) |

**Returns:** `Promise`<[Service](../interfaces/service.md)>

___
<a id="deleteconfigmap"></a>

###  deleteConfigMap

▸ **deleteConfigMap**(name: *`string`*): `Promise`<[ConfigMap](../#configmap)>

*Defined in [Kubernetes.ts:218](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L218)*

Delete a ConfigMap by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[ConfigMap](../#configmap)>

___
<a id="deletecronjob"></a>

###  deleteCronJob

▸ **deleteCronJob**(name: *`string`*): `Promise`<[CronJob](../#cronjob)>

*Defined in [Kubernetes.ts:876](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L876)*

Delete a CronJob by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[CronJob](../#cronjob)>

___
<a id="deletedaemonset"></a>

###  deleteDaemonSet

▸ **deleteDaemonSet**(name: *`string`*): `Promise`<[DaemonSet](../#daemonset)>

*Defined in [Kubernetes.ts:631](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L631)*

Delete a DaemonSet by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[DaemonSet](../#daemonset)>

___
<a id="deletedeployment"></a>

###  deleteDeployment

▸ **deleteDeployment**(name: *`string`*): `Promise`<[Deployment](../interfaces/deployment.md)>

*Defined in [Kubernetes.ts:304](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L304)*

Delete a Deployment by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Deployment](../interfaces/deployment.md)>

___
<a id="deletehorizontalpodautoscaler"></a>

###  deleteHorizontalPodAutoscaler

▸ **deleteHorizontalPodAutoscaler**(name: *`string`*): `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)>

*Defined in [Kubernetes.ts:968](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L968)*

Delete a HorizontalPodAutoscaler by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)>

___
<a id="deleteingress"></a>

###  deleteIngress

▸ **deleteIngress**(name: *`string`*): `Promise`<[Ingress](../interfaces/ingress.md)>

*Defined in [Kubernetes.ts:387](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L387)*

Delete a Ingress by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Ingress](../interfaces/ingress.md)>

___
<a id="deletejob"></a>

###  deleteJob

▸ **deleteJob**(name: *`string`*): `Promise`<[Job](../interfaces/job.md)>

*Defined in [Kubernetes.ts:793](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L793)*

Delete a Job by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Job](../interfaces/job.md)>

___
<a id="deletenamespace"></a>

###  deleteNamespace

▸ **deleteNamespace**(name: *`string`*): `Promise`<[Namespace](../interfaces/namespace.md)>

*Defined in [Kubernetes.ts:70](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L70)*

Delete a Namespace by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Namespace](../interfaces/namespace.md)>

___
<a id="deletepersistentvolumeclaim"></a>

###  deletePersistentVolumeClaim

▸ **deletePersistentVolumeClaim**(name: *`string`*): `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)>

*Defined in [Kubernetes.ts:1060](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L1060)*

Delete a PersistentVolumeClaim by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)>

___
<a id="deletepod"></a>

###  deletePod

▸ **deletePod**(name: *`string`*): `Promise`<[Pod](../interfaces/pod.md)>

*Defined in [Kubernetes.ts:136](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L136)*

Delete a Pod by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Pod](../interfaces/pod.md)>

___
<a id="deletereplicaset"></a>

###  deleteReplicaSet

▸ **deleteReplicaSet**(name: *`string`*): `Promise`<[ReplicaSet](../#replicaset)>

*Defined in [Kubernetes.ts:717](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L717)*

Delete a ReplicaSet by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[ReplicaSet](../#replicaset)>

___
<a id="deletesecret"></a>

###  deleteSecret

▸ **deleteSecret**(name: *`string`*): `Promise`<[Secret](../interfaces/secret.md)>

*Defined in [Kubernetes.ts:466](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L466)*

Delete a Secret by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Secret](../interfaces/secret.md)>

___
<a id="deleteservice"></a>

###  deleteService

▸ **deleteService**(name: *`string`*): `Promise`<[Service](../interfaces/service.md)>

*Defined in [Kubernetes.ts:545](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L545)*

Delete a Service by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Service](../interfaces/service.md)>

___
<a id="exec"></a>

###  exec

▸ **exec**(name: *`string`*, opts?: *[ExecOptions](../interfaces/execoptions.md)*): `Promise`<`string`>

*Inherited from [API](api.md).[exec](api.md#exec)*

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

*Inherited from [API](api.md).[followLogs](api.md#followlogs)*

*Defined in [API.ts:64](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L64)*

Get a log stream from a running container.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| name | `string` | - |
| `Default value` opts | [LogOptions](../interfaces/logoptions.md) |  {} |

**Returns:** `Stream`

___
<a id="getconfigmap"></a>

###  getConfigMap

▸ **getConfigMap**(name: *`string`*): `Promise`<[ConfigMap](../#configmap)>

*Defined in [Kubernetes.ts:167](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L167)*

Get ConfigMap by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[ConfigMap](../#configmap)>

___
<a id="getcronjob"></a>

###  getCronJob

▸ **getCronJob**(name: *`string`*): `Promise`<[CronJob](../#cronjob)>

*Defined in [Kubernetes.ts:826](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L826)*

Get CronJob by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[CronJob](../#cronjob)>

___
<a id="getdaemonset"></a>

###  getDaemonSet

▸ **getDaemonSet**(name: *`string`*): `Promise`<[DaemonSet](../#daemonset)>

*Defined in [Kubernetes.ts:578](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L578)*

Get DaemonSet by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[DaemonSet](../#daemonset)>

___
<a id="getdeployment"></a>

###  getDeployment

▸ **getDeployment**(name: *`string`*): `Promise`<[Deployment](../interfaces/deployment.md)>

*Defined in [Kubernetes.ts:251](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L251)*

Get Deployment by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Deployment](../interfaces/deployment.md)>

___
<a id="gethorizontalpodautoscaler"></a>

###  getHorizontalPodAutoscaler

▸ **getHorizontalPodAutoscaler**(name: *`string`*): `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)>

*Defined in [Kubernetes.ts:911](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L911)*

Get HorizontalPodAutoscaler by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)>

___
<a id="getingress"></a>

###  getIngress

▸ **getIngress**(name: *`string`*): `Promise`<[Ingress](../interfaces/ingress.md)>

*Defined in [Kubernetes.ts:337](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L337)*

Get Ingress by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Ingress](../interfaces/ingress.md)>

___
<a id="getjob"></a>

###  getJob

▸ **getJob**(name: *`string`*): `Promise`<[Job](../interfaces/job.md)>

*Defined in [Kubernetes.ts:748](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L748)*

Get Job by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Job](../interfaces/job.md)>

___
<a id="getlogs"></a>

###  getLogs

▸ **getLogs**(name: *`string`*, opts?: *[LogOptions](../interfaces/logoptions.md)*): `Promise`<`string`>

*Inherited from [API](api.md).[getLogs](api.md#getlogs)*

*Defined in [API.ts:52](https://github.com/rzane/k8s/blob/0f3ff00/src/API.ts#L52)*

Get the logs from a container, and return them as a string.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| name | `string` | - |
| `Default value` opts | [LogOptions](../interfaces/logoptions.md) |  {} |

**Returns:** `Promise`<`string`>

___
<a id="getnamespace"></a>

###  getNamespace

▸ **getNamespace**(name: *`string`*): `Promise`<[Namespace](../interfaces/namespace.md)>

*Defined in [Kubernetes.ts:34](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L34)*

Get Namespace by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Namespace](../interfaces/namespace.md)>

___
<a id="getpersistentvolumeclaim"></a>

###  getPersistentVolumeClaim

▸ **getPersistentVolumeClaim**(name: *`string`*): `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)>

*Defined in [Kubernetes.ts:1003](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L1003)*

Get PersistentVolumeClaim by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)>

___
<a id="getpod"></a>

###  getPod

▸ **getPod**(name: *`string`*): `Promise`<[Pod](../interfaces/pod.md)>

*Defined in [Kubernetes.ts:91](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L91)*

Get Pod by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Pod](../interfaces/pod.md)>

___
<a id="getreplicaset"></a>

###  getReplicaSet

▸ **getReplicaSet**(name: *`string`*): `Promise`<[ReplicaSet](../#replicaset)>

*Defined in [Kubernetes.ts:664](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L664)*

Get ReplicaSet by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[ReplicaSet](../#replicaset)>

___
<a id="getsecret"></a>

###  getSecret

▸ **getSecret**(name: *`string`*): `Promise`<[Secret](../interfaces/secret.md)>

*Defined in [Kubernetes.ts:418](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L418)*

Get Secret by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Secret](../interfaces/secret.md)>

___
<a id="getservice"></a>

###  getService

▸ **getService**(name: *`string`*): `Promise`<[Service](../interfaces/service.md)>

*Defined in [Kubernetes.ts:497](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L497)*

Get Service by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[Service](../interfaces/service.md)>

___
<a id="hasconfigmap"></a>

###  hasConfigMap

▸ **hasConfigMap**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:230](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L230)*

Does a ConfigMap with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hascronjob"></a>

###  hasCronJob

▸ **hasCronJob**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:888](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L888)*

Does a CronJob with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hasdaemonset"></a>

###  hasDaemonSet

▸ **hasDaemonSet**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:643](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L643)*

Does a DaemonSet with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hasdeployment"></a>

###  hasDeployment

▸ **hasDeployment**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:316](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L316)*

Does a Deployment with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hashorizontalpodautoscaler"></a>

###  hasHorizontalPodAutoscaler

▸ **hasHorizontalPodAutoscaler**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:982](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L982)*

Does a HorizontalPodAutoscaler with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hasingress"></a>

###  hasIngress

▸ **hasIngress**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:399](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L399)*

Does a Ingress with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hasjob"></a>

###  hasJob

▸ **hasJob**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:805](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L805)*

Does a Job with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hasnamespace"></a>

###  hasNamespace

▸ **hasNamespace**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:77](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L77)*

Does a Namespace with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="haspersistentvolumeclaim"></a>

###  hasPersistentVolumeClaim

▸ **hasPersistentVolumeClaim**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:1074](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L1074)*

Does a PersistentVolumeClaim with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="haspod"></a>

###  hasPod

▸ **hasPod**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:148](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L148)*

Does a Pod with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hasreplicaset"></a>

###  hasReplicaSet

▸ **hasReplicaSet**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:729](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L729)*

Does a ReplicaSet with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hassecret"></a>

###  hasSecret

▸ **hasSecret**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:478](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L478)*

Does a Secret with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hasservice"></a>

###  hasService

▸ **hasService**(name: *`string`*): `Promise`<`boolean`>

*Defined in [Kubernetes.ts:557](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L557)*

Does a Service with the given name exist?

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="listconfigmaps"></a>

###  listConfigMaps

▸ **listConfigMaps**(): `Promise`<[ConfigMap](../#configmap)[]>

*Defined in [Kubernetes.ts:160](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L160)*

List all ConfigMaps

**Returns:** `Promise`<[ConfigMap](../#configmap)[]>

___
<a id="listcronjobs"></a>

###  listCronJobs

▸ **listCronJobs**(): `Promise`<[CronJob](../#cronjob)[]>

*Defined in [Kubernetes.ts:817](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L817)*

List all CronJobs

**Returns:** `Promise`<[CronJob](../#cronjob)[]>

___
<a id="listdaemonsets"></a>

###  listDaemonSets

▸ **listDaemonSets**(): `Promise`<[DaemonSet](../#daemonset)[]>

*Defined in [Kubernetes.ts:569](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L569)*

List all DaemonSets

**Returns:** `Promise`<[DaemonSet](../#daemonset)[]>

___
<a id="listdeployments"></a>

###  listDeployments

▸ **listDeployments**(): `Promise`<[Deployment](../interfaces/deployment.md)[]>

*Defined in [Kubernetes.ts:242](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L242)*

List all Deployments

**Returns:** `Promise`<[Deployment](../interfaces/deployment.md)[]>

___
<a id="listhorizontalpodautoscalers"></a>

###  listHorizontalPodAutoscalers

▸ **listHorizontalPodAutoscalers**(): `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)[]>

*Defined in [Kubernetes.ts:900](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L900)*

List all HorizontalPodAutoscalers

**Returns:** `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)[]>

___
<a id="listingresses"></a>

###  listIngresses

▸ **listIngresses**(): `Promise`<[Ingress](../interfaces/ingress.md)[]>

*Defined in [Kubernetes.ts:328](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L328)*

List all Ingresses

**Returns:** `Promise`<[Ingress](../interfaces/ingress.md)[]>

___
<a id="listjobs"></a>

###  listJobs

▸ **listJobs**(): `Promise`<[Job](../interfaces/job.md)[]>

*Defined in [Kubernetes.ts:741](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L741)*

List all Jobs

**Returns:** `Promise`<[Job](../interfaces/job.md)[]>

___
<a id="listnamespaces"></a>

###  listNamespaces

▸ **listNamespaces**(): `Promise`<[Namespace](../interfaces/namespace.md)[]>

*Defined in [Kubernetes.ts:27](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L27)*

List all Namespaces

**Returns:** `Promise`<[Namespace](../interfaces/namespace.md)[]>

___
<a id="listpersistentvolumeclaims"></a>

###  listPersistentVolumeClaims

▸ **listPersistentVolumeClaims**(): `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)[]>

*Defined in [Kubernetes.ts:994](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L994)*

List all PersistentVolumeClaims

**Returns:** `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)[]>

___
<a id="listpods"></a>

###  listPods

▸ **listPods**(): `Promise`<[Pod](../interfaces/pod.md)[]>

*Defined in [Kubernetes.ts:84](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L84)*

List all Pods

**Returns:** `Promise`<[Pod](../interfaces/pod.md)[]>

___
<a id="listreplicasets"></a>

###  listReplicaSets

▸ **listReplicaSets**(): `Promise`<[ReplicaSet](../#replicaset)[]>

*Defined in [Kubernetes.ts:655](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L655)*

List all ReplicaSets

**Returns:** `Promise`<[ReplicaSet](../#replicaset)[]>

___
<a id="listsecrets"></a>

###  listSecrets

▸ **listSecrets**(): `Promise`<[Secret](../interfaces/secret.md)[]>

*Defined in [Kubernetes.ts:411](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L411)*

List all Secrets

**Returns:** `Promise`<[Secret](../interfaces/secret.md)[]>

___
<a id="listservices"></a>

###  listServices

▸ **listServices**(): `Promise`<[Service](../interfaces/service.md)[]>

*Defined in [Kubernetes.ts:490](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L490)*

List all Services

**Returns:** `Promise`<[Service](../interfaces/service.md)[]>

___
<a id="patchconfigmap"></a>

###  patchConfigMap

▸ **patchConfigMap**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[ConfigMap](../#configmap)>*): `Promise`<[ConfigMap](../#configmap)>

*Defined in [Kubernetes.ts:203](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L203)*

Patch a ConfigMap by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[ConfigMap](../#configmap)> |

**Returns:** `Promise`<[ConfigMap](../#configmap)>

___
<a id="patchcronjob"></a>

###  patchCronJob

▸ **patchCronJob**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[CronJob](../#cronjob)>*): `Promise`<[CronJob](../#cronjob)>

*Defined in [Kubernetes.ts:861](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L861)*

Patch a CronJob by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[CronJob](../#cronjob)> |

**Returns:** `Promise`<[CronJob](../#cronjob)>

___
<a id="patchdaemonset"></a>

###  patchDaemonSet

▸ **patchDaemonSet**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[DaemonSet](../#daemonset)>*): `Promise`<[DaemonSet](../#daemonset)>

*Defined in [Kubernetes.ts:616](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L616)*

Patch a DaemonSet by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[DaemonSet](../#daemonset)> |

**Returns:** `Promise`<[DaemonSet](../#daemonset)>

___
<a id="patchdeployment"></a>

###  patchDeployment

▸ **patchDeployment**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[Deployment](../interfaces/deployment.md)>*): `Promise`<[Deployment](../interfaces/deployment.md)>

*Defined in [Kubernetes.ts:289](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L289)*

Patch a Deployment by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[Deployment](../interfaces/deployment.md)> |

**Returns:** `Promise`<[Deployment](../interfaces/deployment.md)>

___
<a id="patchhorizontalpodautoscaler"></a>

###  patchHorizontalPodAutoscaler

▸ **patchHorizontalPodAutoscaler**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)>*): `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)>

*Defined in [Kubernetes.ts:953](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L953)*

Patch a HorizontalPodAutoscaler by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)> |

**Returns:** `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)>

___
<a id="patchingress"></a>

###  patchIngress

▸ **patchIngress**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[Ingress](../interfaces/ingress.md)>*): `Promise`<[Ingress](../interfaces/ingress.md)>

*Defined in [Kubernetes.ts:372](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L372)*

Patch a Ingress by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[Ingress](../interfaces/ingress.md)> |

**Returns:** `Promise`<[Ingress](../interfaces/ingress.md)>

___
<a id="patchjob"></a>

###  patchJob

▸ **patchJob**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[Job](../interfaces/job.md)>*): `Promise`<[Job](../interfaces/job.md)>

*Defined in [Kubernetes.ts:781](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L781)*

Patch a Job by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[Job](../interfaces/job.md)> |

**Returns:** `Promise`<[Job](../interfaces/job.md)>

___
<a id="patchnamespace"></a>

###  patchNamespace

▸ **patchNamespace**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[Namespace](../interfaces/namespace.md)>*): `Promise`<[Namespace](../interfaces/namespace.md)>

*Defined in [Kubernetes.ts:58](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L58)*

Patch a Namespace by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[Namespace](../interfaces/namespace.md)> |

**Returns:** `Promise`<[Namespace](../interfaces/namespace.md)>

___
<a id="patchpersistentvolumeclaim"></a>

###  patchPersistentVolumeClaim

▸ **patchPersistentVolumeClaim**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[PersistentVolumeClaim](../#persistentvolumeclaim)>*): `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)>

*Defined in [Kubernetes.ts:1045](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L1045)*

Patch a PersistentVolumeClaim by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[PersistentVolumeClaim](../#persistentvolumeclaim)> |

**Returns:** `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)>

___
<a id="patchpod"></a>

###  patchPod

▸ **patchPod**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[Pod](../interfaces/pod.md)>*): `Promise`<[Pod](../interfaces/pod.md)>

*Defined in [Kubernetes.ts:124](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L124)*

Patch a Pod by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[Pod](../interfaces/pod.md)> |

**Returns:** `Promise`<[Pod](../interfaces/pod.md)>

___
<a id="patchreplicaset"></a>

###  patchReplicaSet

▸ **patchReplicaSet**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[ReplicaSet](../#replicaset)>*): `Promise`<[ReplicaSet](../#replicaset)>

*Defined in [Kubernetes.ts:702](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L702)*

Patch a ReplicaSet by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[ReplicaSet](../#replicaset)> |

**Returns:** `Promise`<[ReplicaSet](../#replicaset)>

___
<a id="patchsecret"></a>

###  patchSecret

▸ **patchSecret**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[Secret](../interfaces/secret.md)>*): `Promise`<[Secret](../interfaces/secret.md)>

*Defined in [Kubernetes.ts:451](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L451)*

Patch a Secret by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[Secret](../interfaces/secret.md)> |

**Returns:** `Promise`<[Secret](../interfaces/secret.md)>

___
<a id="patchservice"></a>

###  patchService

▸ **patchService**(name: *`string`*, resource: *[DeepPartial](../#deeppartial)<[Service](../interfaces/service.md)>*): `Promise`<[Service](../interfaces/service.md)>

*Defined in [Kubernetes.ts:530](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L530)*

Patch a Service by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DeepPartial](../#deeppartial)<[Service](../interfaces/service.md)> |

**Returns:** `Promise`<[Service](../interfaces/service.md)>

___
<a id="replaceconfigmap"></a>

###  replaceConfigMap

▸ **replaceConfigMap**(name: *`string`*, resource: *[ConfigMap](../#configmap)*): `Promise`<[ConfigMap](../#configmap)>

*Defined in [Kubernetes.ts:188](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L188)*

Replace a ConfigMap by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [ConfigMap](../#configmap) |

**Returns:** `Promise`<[ConfigMap](../#configmap)>

___
<a id="replacecronjob"></a>

###  replaceCronJob

▸ **replaceCronJob**(name: *`string`*, resource: *[CronJob](../#cronjob)*): `Promise`<[CronJob](../#cronjob)>

*Defined in [Kubernetes.ts:849](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L849)*

Replace a CronJob by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [CronJob](../#cronjob) |

**Returns:** `Promise`<[CronJob](../#cronjob)>

___
<a id="replacedaemonset"></a>

###  replaceDaemonSet

▸ **replaceDaemonSet**(name: *`string`*, resource: *[DaemonSet](../#daemonset)*): `Promise`<[DaemonSet](../#daemonset)>

*Defined in [Kubernetes.ts:601](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L601)*

Replace a DaemonSet by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [DaemonSet](../#daemonset) |

**Returns:** `Promise`<[DaemonSet](../#daemonset)>

___
<a id="replacedeployment"></a>

###  replaceDeployment

▸ **replaceDeployment**(name: *`string`*, resource: *[Deployment](../interfaces/deployment.md)*): `Promise`<[Deployment](../interfaces/deployment.md)>

*Defined in [Kubernetes.ts:274](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L274)*

Replace a Deployment by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [Deployment](../interfaces/deployment.md) |

**Returns:** `Promise`<[Deployment](../interfaces/deployment.md)>

___
<a id="replacehorizontalpodautoscaler"></a>

###  replaceHorizontalPodAutoscaler

▸ **replaceHorizontalPodAutoscaler**(name: *`string`*, resource: *[HorizontalPodAutoscaler](../#horizontalpodautoscaler)*): `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)>

*Defined in [Kubernetes.ts:938](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L938)*

Replace a HorizontalPodAutoscaler by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [HorizontalPodAutoscaler](../#horizontalpodautoscaler) |

**Returns:** `Promise`<[HorizontalPodAutoscaler](../#horizontalpodautoscaler)>

___
<a id="replaceingress"></a>

###  replaceIngress

▸ **replaceIngress**(name: *`string`*, resource: *[Ingress](../interfaces/ingress.md)*): `Promise`<[Ingress](../interfaces/ingress.md)>

*Defined in [Kubernetes.ts:360](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L360)*

Replace a Ingress by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [Ingress](../interfaces/ingress.md) |

**Returns:** `Promise`<[Ingress](../interfaces/ingress.md)>

___
<a id="replacejob"></a>

###  replaceJob

▸ **replaceJob**(name: *`string`*, resource: *[Job](../interfaces/job.md)*): `Promise`<[Job](../interfaces/job.md)>

*Defined in [Kubernetes.ts:769](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L769)*

Replace a Job by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [Job](../interfaces/job.md) |

**Returns:** `Promise`<[Job](../interfaces/job.md)>

___
<a id="replacenamespace"></a>

###  replaceNamespace

▸ **replaceNamespace**(name: *`string`*, resource: *[Namespace](../interfaces/namespace.md)*): `Promise`<[Namespace](../interfaces/namespace.md)>

*Defined in [Kubernetes.ts:48](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L48)*

Replace a Namespace by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [Namespace](../interfaces/namespace.md) |

**Returns:** `Promise`<[Namespace](../interfaces/namespace.md)>

___
<a id="replacepersistentvolumeclaim"></a>

###  replacePersistentVolumeClaim

▸ **replacePersistentVolumeClaim**(name: *`string`*, resource: *[PersistentVolumeClaim](../#persistentvolumeclaim)*): `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)>

*Defined in [Kubernetes.ts:1030](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L1030)*

Replace a PersistentVolumeClaim by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [PersistentVolumeClaim](../#persistentvolumeclaim) |

**Returns:** `Promise`<[PersistentVolumeClaim](../#persistentvolumeclaim)>

___
<a id="replacepod"></a>

###  replacePod

▸ **replacePod**(name: *`string`*, resource: *[Pod](../interfaces/pod.md)*): `Promise`<[Pod](../interfaces/pod.md)>

*Defined in [Kubernetes.ts:112](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L112)*

Replace a Pod by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [Pod](../interfaces/pod.md) |

**Returns:** `Promise`<[Pod](../interfaces/pod.md)>

___
<a id="replacereplicaset"></a>

###  replaceReplicaSet

▸ **replaceReplicaSet**(name: *`string`*, resource: *[ReplicaSet](../#replicaset)*): `Promise`<[ReplicaSet](../#replicaset)>

*Defined in [Kubernetes.ts:687](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L687)*

Replace a ReplicaSet by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [ReplicaSet](../#replicaset) |

**Returns:** `Promise`<[ReplicaSet](../#replicaset)>

___
<a id="replacesecret"></a>

###  replaceSecret

▸ **replaceSecret**(name: *`string`*, resource: *[Secret](../interfaces/secret.md)*): `Promise`<[Secret](../interfaces/secret.md)>

*Defined in [Kubernetes.ts:439](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L439)*

Replace a Secret by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [Secret](../interfaces/secret.md) |

**Returns:** `Promise`<[Secret](../interfaces/secret.md)>

___
<a id="replaceservice"></a>

###  replaceService

▸ **replaceService**(name: *`string`*, resource: *[Service](../interfaces/service.md)*): `Promise`<[Service](../interfaces/service.md)>

*Defined in [Kubernetes.ts:518](https://github.com/rzane/k8s/blob/0f3ff00/src/Kubernetes.ts#L518)*

Replace a Service by name

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| resource | [Service](../interfaces/service.md) |

**Returns:** `Promise`<[Service](../interfaces/service.md)>

___

