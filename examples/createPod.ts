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

export default async () => {
  const k8s = new Kubernetes();

  try {
    await k8s.deletePod(name);
  } catch (err) {
    // Ignored
  }

  console.log(await k8s.createPod(pod));
};
