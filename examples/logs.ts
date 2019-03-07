import { Kubernetes } from "../src";
import * as stream from "stream";
import { promisify } from "util";

const finished = promisify(stream.finished);

export default async () => {
  const k8s = new Kubernetes();
  const logs = k8s.followLogs("looper");

  logs.pipe(process.stdout);
  await finished(logs as any);
};
