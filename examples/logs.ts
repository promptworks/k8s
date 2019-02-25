import { Kubernetes, Pod } from "../src";
import * as stream from "stream";
import { promisify } from "util";

const k8s = new Kubernetes();
const finished = promisify(stream.finished);

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

const delay = (n: number) => {
  return new Promise(resolve => setTimeout(resolve, n));
};

const start = async () => {
  try {
    await k8s.deletePod(name);
  } catch (err) {
    // Ignored
  }

  await k8s.createPod(pod);
  await delay(5000);

  const stream = k8s.streamLogs(name);
  stream.pipe(process.stdout);
  await finished(stream);
};

start().catch(error => {
  console.error(error);
  process.exit(1);
});
