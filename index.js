const fs = require("fs");
const { compileFromFile } = require("json-schema-to-typescript");
const chokidar = require("chokidar");

const configFilePath = "path/to/config.json";
const outputFolder = "schema";

async function generateTypes(name, schemaUrl) {
  try {
    const types = await compileFromFile(schemaUrl);

    const fileName = `${name}.ts`;
    const filePath = `${outputFolder}/${fileName}`;

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

const { exec } = require("tsx");

const srcFolderPath = "src";

function executeJsonTsFile(filePath) {
  const outputFile = filePath.replace(".json.ts", "");

  exec(filePath)
    .then((result) => {
      fs.writeFileSync(outputFile, result);
      console.log(
        `Executed ${filePath} and stored the result in ${outputFile}`
      );
    })
    .catch((error) => {
      console.error(`Error executing ${filePath}:`, error);
    });
}

function watchSrcFolder() {
  const watcher = chokidar.watch(`${srcFolderPath}/**/*.json.ts`);
  console.log(`Watching "${srcFolderPath}" for *.json.ts files...`);

  watcher.on("add", (filePath) => {
    console.log(`New file added: ${filePath}`);
    executeJsonTsFile(filePath);
  });

  watcher.on("change", (filePath) => {
    console.log(`File changed: ${filePath}`);
    executeJsonTsFile(filePath);
  });

  watcher.on("unlink", (filePath) => {
    console.log(`File removed: ${filePath}`);
    const outputFile = filePath.replace(".json.ts", "");
    fs.unlinkSync(outputFile);
    console.log(`Deleted corresponding output file: ${outputFile}`);
  });

  watcher.on("error", (error) => {
    console.error("Error watching src folder:", error);
  });
}

/***
 *
 *
 *
 *
 */

function runTool() {
  processConfigFile();
  watchConfigFile();
  watchSrcFolder();
}

runTool();
