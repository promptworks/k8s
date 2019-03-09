import * as fs from "fs";
import { promisify } from "util";
import dtsGenerator from "dtsgenerator";
import { renderFile } from "ejs";

const prettier = require("prettier");
const data = require("./data.json");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const formatCode = (code: string) => {
  return prettier.format(code, { parser: "typescript" });
};

const hackTypes = (types: string) =>
  types
    .replace(/declare (interface|type) /g, "export $1 ")
    .replace(
      /IoK8sApimachineryPkgUtilIntstrIntOrString = string;/,
      "IoK8sApimachineryPkgUtilIntstrIntOrString = number | string;"
    );

export const generateTypes = async (input: string, output: string) => {
  const content = await readFile(input, "utf-8");
  const schema = { ...JSON.parse(content), paths: {} };

  const types = await dtsGenerator({
    contents: [schema],
    namespaceName: ""
  });

  await writeFile(output, formatCode(hackTypes(types)));
};

export const generateTemplate = async (input: string, output: string) => {
  const code = await renderFile<string>(input, data);
  await writeFile(output, formatCode(code));
};

export const generators = {
  types: generateTypes,
  template: generateTemplate
};
