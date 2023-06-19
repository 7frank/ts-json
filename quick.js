const {
  quicktype,
  InputData,
  jsonInputForTargetLanguage,
  JSONSchemaInput,
  FetchingJSONSchemaStore,
} = require("quicktype-core");

async function quicktypeJSON(targetLanguage, typeName, jsonString) {
  const jsonInput = jsonInputForTargetLanguage(targetLanguage);

  // We could add multiple samples for the same desired
  // type, or many sources for other types. Here we're
  // just making one type from one piece of sample JSON.
  await jsonInput.addSource({
    name: typeName,
    samples: [jsonString],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  return await quicktype({
    inputData,
    lang: targetLanguage,
  });
}

// async function quicktypeJSONSchema(targetLanguage, typeName, jsonSchemaString) {
//   const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());

//   // We could add multiple schemas for multiple types,
//   // but here we're just making one type from JSON schema.
//   await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });

//   const inputData = new InputData();
//   inputData.addInput(schemaInput);

//   return await quicktype({
//     inputData,
//     lang: targetLanguage,
//   });
// }

async function compile(schemaName, jsonString) {
  const { lines } = await quicktypeJSON("typescript", schemaName, jsonString);
  return lines.join("\n");

  //   const { lines: pythonPerson } = await quicktypeJSONSchema(
  //     "python",
  //     "Person",
  //     jsonSchemaString
  //   );
  //   console.log(pythonPerson.join("\n"));
}

module.exports = { compile };
