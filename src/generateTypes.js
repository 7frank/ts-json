import fs from "fs";
import { downloadFile } from "./downloadFile.js";
import { compile } from "./quick.js";
import { replaceCommentsWithDash } from "./escapeNestedComments.js";
import { kebabToCamelCase } from "./kebabToCamelCase.js";
import { getFileNameAndExtension } from "./getFileNameAndExtension.js";

export async function generateTypes(name, schemaUrl, { outputFolder }) {
  console.log("generateTypes", "for", name, schemaUrl);

  const { extension, fileName: schemaFileName } =
    getFileNameAndExtension(schemaUrl);

  try {
    const r = await downloadFile(schemaUrl);

    let types = await compile(
      kebabToCamelCase(schemaFileName + "-" + extension + "-schema"),
      r
    );

    types = replaceCommentsWithDash(types);

    const outputFileName = `${name}.ts`;
    const filePath = `${outputFolder}/${outputFileName}`;

    await fs.promises.writeFile(filePath, types);
    console.log(`Generated types for "${name}". Saved to "${filePath}"`);
  } catch (error) {
    console.error(`Error generating types for "${name}":`, error);
  }
}
