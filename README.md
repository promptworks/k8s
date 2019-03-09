# @promptly/k8s

A simple Kubernetes client for Node.js based on [`kubernetes-client`](https://github.com/godaddy/kubernetes-client).

Because some functionality isn't yet supported by  `kubernetes-client`, this package also provides convenience methods for shelling out to `kubectl`.

[View the documentation](docs/README.md)

## Installing

    $ yarn add @promptly/k8s

## Usage

```typescript
import { Kubernetes, Kubectl } from '@promptly/k8s';

// This is a wrapper around `kubernetes-client`
const kubernetes = new Kubernetes();

// This is a wrapper around `kubectl`
const kubectl = new Kubectl();
```
