import { Kubectl } from "../src";

describe("Kubectl", () => {
  let kubectl: Kubectl;
  let exec: jest.SpyInstance;

  const flags = ["--foo", "bar", "--yup"];

  beforeEach(() => {
    kubectl = new Kubectl({
      foo: "bar",
      yup: true,
      nope: false
    });

    exec = jest.spyOn(kubectl, "shell" as any);
    exec.mockResolvedValue({});
  });

  test("run", async () => {
    await kubectl.kubectl(["arg"]);
    expect(exec).toHaveBeenCalledWith("kubectl", [...flags, "arg"], {});
  });

  test("run with options", async () => {
    await kubectl.kubectl(["arg"], { reject: false });
    expect(exec).toHaveBeenCalledWith("kubectl", [...flags, "arg"], {
      reject: false
    });
  });

  test("attach", async () => {
    await kubectl.attach("nginx");
    expect(exec).toHaveBeenCalledWith(
      "kubectl",
      [...flags, "attach", "nginx"],
      { stderr: undefined, stdin: undefined, stdout: undefined }
    );
  });

  test("attach with options", async () => {
    const stdout: any = "stderr";
    const stderr: any = "stdout";
    const stdin: any = "stdin";

    await kubectl.attach("nginx", {
      stdin,
      stdout,
      stderr,
      tty: true,
      container: "one"
    });

    expect(exec).toHaveBeenCalledWith(
      "kubectl",
      [...flags, "attach", "nginx", "--tty", "--container", "one", "--stdin"],
      {
        container: "one",
        stderr: "stdout",
        stdin: "stdin",
        stdout: "stderr",
        tty: true
      }
    );
  });

  test("connect", async () => {
    await kubectl.connect("nginx");
    expect(exec).toHaveBeenCalledWith("kubectl", [...flags, "exec", "nginx"], {
      stderr: undefined,
      stdin: undefined,
      stdout: undefined
    });
  });

  test("connect with options", async () => {
    const stdout: any = "stderr";
    const stderr: any = "stdout";
    const stdin: any = "stdin";

    await kubectl.connect("nginx", {
      stdin,
      stdout,
      stderr,
      tty: true,
      container: "one",
      command: ["sh"]
    });

    expect(exec).toHaveBeenCalledWith(
      "kubectl",
      [
        ...flags,
        "exec",
        "nginx",
        "--tty",
        "--container",
        "one",
        "--stdin",
        "--",
        "sh"
      ],
      {
        container: "one",
        command: ["sh"],
        stderr: "stdout",
        stdin: "stdin",
        stdout: "stderr",
        tty: true
      }
    );
  });
});
