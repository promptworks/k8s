import { Kubernetes } from "../src";

export default async () => {
  const k8s = new Kubernetes();

  const out = await k8s.pods.exec("looper", {
    stdout: true,
    command: ["uname", "-a"]
  });

  process.stdout.write(out);

  await k8s.pods.connect("looper", {
    tty: true,
    stdin: process.stdin,
    stdout: process.stdout,
    stderr: process.stderr,
    command: ["sh"]
  });
};
