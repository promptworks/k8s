import { Kubernetes } from "../src";

const exec = async (k8s: Kubernetes) => {
  const stdin: any = process.stdin;

  stdin.setRawMode(true);
  stdin.resume();

  await k8s.exec("looper", {
    tty: true,
    stdin,
    stdout: process.stdout,
    stderr: process.stderr,
    command: ["sh"]
  });
};

export default async () => {
  const k8s = new Kubernetes();
  await exec(k8s);
  process.exit(0);
};
