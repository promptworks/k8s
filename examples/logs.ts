import { Kubernetes } from "../src";
import * as stream from "stream";
import { promisify } from "util";
import { createPod } from "./createPod";

const finished = promisify(stream.finished);

const delay = (n: number) => {
  return new Promise(resolve => setTimeout(resolve, n));
};

const logs = async (k8s: Kubernetes) => {
  const pod = await createPod(k8s);
  const name = pod.metadata!.name!;

  await delay(5000);

  return k8s.followLogs(name);
};

export default async () => {
  const k8s = new Kubernetes();
  const stream = await logs(k8s);

  stream.pipe(process.stdout);
  await finished(stream);
};
