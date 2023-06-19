import { PackageJSONSchema, Convert } from "../schema/PackageJsonSchema";

const mySchema: PackageJSONSchema = {
  name: "ts-json-stuff",
  version: "1.0.0",
  description:
    "A tool for generating TypeScript types from JSON schemas and executing JSON-TS files",
  scripts: {
    start: "nodemon index.js",
  },
  dependencies: {},
  author: "7frank",
  license: "MIT",
};

// will throw an error if the schema is not valid
const packageJSONSchema = Convert.toPackageJSONSchema(JSON.stringify(mySchema));
console.log("json of schema valid");
