import { Kubernetes } from "../src";

const exec = async (k8s: Kubernetes) => {
  /**
   * Simple
   */

  const out = await k8s.exec("looper", {
    stdout: true,
    command: ["uname", "-a"]
  });

  process.stdout.write(out);

  /**
   * Interactive
   */
  await k8s.connect("looper", {
    tty: true,
    stdin: process.stdin,
    stdout: process.stdout,
    stderr: process.stderr,
    command: ["sh"]
  });
};

export default async () => {
  const k8s = new Kubernetes();
  await exec(k8s);
};
