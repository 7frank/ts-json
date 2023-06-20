import fs from "fs";
import chokidar from "chokidar";
import { generateTypes } from "./src/generateTypes.js";

const configFilePath = "./ts.config.json";
const outputFolder = "schema";

async function processConfigFile() {
  try {
    const configContent = await fs.promises.readFile(configFilePath, "utf8");
    const config = JSON.parse(configContent);

    for await (const { name, schemaUrl } of config.schemas) {
      console.log(`Generating types for "${name}"...`);
      await generateTypes(name, schemaUrl, { outputFolder });
    }

    // TODO instead of generating them every time let's have a file watcher
    for await (const { name, output } of config.files) {
      console.log(`TODO Generating target files "${name}" >> "${output}" `);
      // await generateTypes(name, schemaUrl, { outputFolder });
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
