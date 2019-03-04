# k8s

A really simple Kubernetes client for Node.js based on [`kubernetes-client`](https://github.com/godaddy/kubernetes-client).

Features that aren't available in `kuberentes-client` (`apply`, `exec`, `attach`) are implemented by shelling out to `kubectl`. As features are added to `kubernetes-client`, the goal is to eventually remove the need for `kubectl`.

