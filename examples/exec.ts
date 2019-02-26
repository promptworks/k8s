import { Kubernetes } from "../src";

const exec = async (k8s: Kubernetes) => {
  // (process.stdin as any).setRawMode(true);

  await k8s.exec("looper", ["sh"], {
    stdin: process.stdin,
    stdout: process.stdout,
    stderr: process.stderr
  });

  console.log("resolved");
  console.log("HANDLES");
  console.log((process as any)._getActiveHandles());
};

export default async () => {
  const k8s = new Kubernetes();
  await exec(k8s);
};
