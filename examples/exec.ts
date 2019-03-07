import { Kubectl, Kubernetes } from "./../src";

export default async () => {
  const k8s = new Kubernetes();
  const kubectl = new Kubectl();

  const out = await k8s.exec("looper", {
    stdout: true,
    command: ["uname", "-a"]
  });

  process.stdout.write(out);

  await kubectl.exec("looper", {
    tty: true,
    stdin: process.stdin,
    stdout: process.stdout,
    stderr: process.stderr,
    command: ["sh"]
  });
};
