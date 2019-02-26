import { Pod, Kubernetes } from "../src";

const name = "looper";
const pod: Pod = {
  apiVersion: "v1",
  kind: "Pod",
  metadata: { name },
  spec: {
    containers: [
      {
        name,
        image: "alpine",
        command: [
          "sh",
          "-c",
          'for i in `seq 1 999`; do echo "$i"; sleep 1; done'
        ]
      }
    ]
  }
};

export const createPod = async (k8s: Kubernetes) => {
  try {
    await k8s.deletePod(name);
  } catch (err) {
    // Ignored
  }

  return k8s.createPod(pod);
};

export default async () => {
  const k8s = new Kubernetes();
  const pod = await createPod(k8s);
  console.log(pod);
};
