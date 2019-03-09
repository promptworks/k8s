import * as fs from "fs";
import { promisify } from "util";
import dtsGenerator from "dtsgenerator";

export const readFile = promisify(fs.readFile);
export const writeFile = promisify(fs.writeFile);

export const generateTypes = async (input: string, output: string) => {
  const content = await readFile(input, "utf-8");
  const schema = { ...JSON.parse(content), paths: {} };

  const types = await dtsGenerator({
    contents: [schema],
    namespaceName: ""
  });

  await writeFile(
    output,
    types.replace(/declare (interface|type) /g, "export $1 ")
  );
};

export const generators = {
  types: generateTypes
};
