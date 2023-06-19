import fs from "fs";
import chokidar from "chokidar";
import { downloadFile } from "./src/downloadFile.js";
import { compile } from "./src/quick.js";
import { escapeNestedComments } from "./src/escapeNestedComments.js";

const configFilePath = "./ts.config.json";
const outputFolder = "schema";

function getFileNameAndExtension(path) {
  // Extract the last part of the path after the last '/'
  const fileNameWithExtension = path.substring(path.lastIndexOf("/") + 1);

  // Split the file name and extension using the last occurrence of '.'
  const index = fileNameWithExtension.lastIndexOf(".");
  const fileName = fileNameWithExtension.substring(0, index);
  const extension = fileNameWithExtension.substring(index + 1);

  return {
    fileName,
    extension,
  };
}

function kebabToCamelCase(str) {
  return str.replace(/-([a-z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
}

async function generateTypes(name, schemaUrl) {
  console.log("generateTypes", "for", name, schemaUrl);

  const { extension, fileName: schemaFileName } =
    getFileNameAndExtension(schemaUrl);

  try {
    const r = await downloadFile(schemaUrl);

    let types = await compile(
      kebabToCamelCase(schemaFileName + "-" + extension + "-schema"),
      r
    );

    types = escapeNestedComments(types);

    const outputFileName = `${name}.ts`;
    const filePath = `${outputFolder}/${outputFileName}`;

    await fs.promises.writeFile(filePath, types);
    console.log(`Generated types for "${name}". Saved to "${filePath}"`);
  } catch (error) {
    console.error(`Error generating types for "${name}":`, error);
  }
}

async function processConfigFile() {
  try {
    const configContent = await fs.promises.readFile(configFilePath, "utf8");
    const config = JSON.parse(configContent);

    for (const { name, schemaUrl } of config) {
      console.log(`Generating types for "${name}"...`);
      await generateTypes(name, schemaUrl);
    }
  } catch (error) {
    console.error("Error reading or parsing the config file:", error);
  }
}

function watchConfigFile() {
  const watcher = chokidar.watch(configFilePath);
  console.log(`Watching config file at "${configFilePath}"...`);

  watcher.on("change", () => {
    console.log(`Config file changed. Generating types...`);
    processConfigFile();
  });

  watcher.on("error", (error) => {
    console.error("Error watching config file:", error);
  });
}

/****
 *
 *
 *
 */

// const { exec } from"tsx");

// const srcFolderPath = "src";

// function executeJsonTsFile(filePath) {
//   const outputFile = filePath.replace(".json.ts", "");

//   exec(filePath)
//     .then((result) => {
//       fs.writeFileSync(outputFile, result);
//       console.log(
//         `Executed ${filePath} and stored the result in ${outputFile}`
//       );
//     })
//     .catch((error) => {
//       console.error(`Error executing ${filePath}:`, error);
//     });
// }

// function watchSrcFolder() {
//   const watcher = chokidar.watch(`${srcFolderPath}/**/*.json.ts`);
//   console.log(`Watching "${srcFolderPath}" for *.json.ts files...`);

//   watcher.on("add", (filePath) => {
//     console.log(`New file added: ${filePath}`);
//     executeJsonTsFile(filePath);
//   });

//   watcher.on("change", (filePath) => {
//     console.log(`File changed: ${filePath}`);
//     executeJsonTsFile(filePath);
//   });

//   watcher.on("unlink", (filePath) => {
//     console.log(`File removed: ${filePath}`);
//     const outputFile = filePath.replace(".json.ts", "");
//     fs.unlinkSync(outputFile);
//     console.log(`Deleted corresponding output file: ${outputFile}`);
//   });

//   watcher.on("error", (error) => {
//     console.error("Error watching src folder:", error);
//   });
// }

/***
 *
 *
 *
 *
 */

function runTool() {
  processConfigFile();
  watchConfigFile();
  // watchSrcFolder();
}

runTool();
