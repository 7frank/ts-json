import { TraefikV2JSONSchema, Convert } from "../schema/TraefikV2";

import yaml from "js-yaml";

const mySchema: TraefikV2JSONSchema = {
  api: { insecure: true },
  global: {},
};

// will throw an error if the schema is not valid
const packageJSONSchema = Convert.toTraefikV2JSONSchema(
  JSON.stringify(mySchema)
);
console.log(yaml.dump(packageJSONSchema));
