const fs = require('fs');
const yaml = require('js-yaml');
const $RefParser = require('json-schema-ref-parser');
const { execSync } = require('child_process');

const args = process.argv.slice(2);
var example_set = args[0]
var flow_set = args[1]
var base_yaml = "./beckn_yaml.yaml"//args[0]; 
var example_yaml = "./index.yaml"//args[1];
var outputPath = "../build/build.yaml"

// const outputPath = `./build.yaml`;
// const unresolvedFilePath = `https://raw.githubusercontent.com/beckn/protocol-specifications/master/api/transaction/components/index.yaml`
const tempPath = `./temp.yaml`;

getSwaggerYaml(example_set, outputPath);

function getSwaggerYaml(example_set, outputPath){

  $RefParser.dereference(example_yaml)
    .then((schema) => {
      let examples = schema["examples"]
      examples = examples[example_set];
      buildSwagger(base_yaml, tempPath);
      var spec_file = fs.readFileSync(tempPath)
      var spec = yaml.load(spec_file)
      addEnumTag(spec, schema)

      GenerateYaml(spec, examples, outputPath);
      cleanup()
    })
    .catch((error) => {
      console.error('Error parsing schema:', error);
    });

}

function cleanup() {
  try {
    fs.unlinkSync(tempPath);
    console.log('Temporary file deleted');
  } catch (error) {
    console.error('Error deleting temporary file:', error);
  }
}

function buildSwagger(inPath, outPath) {
  try {
    const command = `swagger-cli bundle ${inPath} --outfile ${outPath} -t yaml`;
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error('An error occurred while generating the Swagger bundle:', error);
    process.exit(1);
  }
}

function addEnumTag(base, layer) {
  base["x-enum"] = layer["enum"]
  base["x-tags"] = layer["tags"]
  base["x-flows"] = layer["flows"][flow_set]
}

function GenerateYaml(base, layer, output_yaml) {
  let examples = layer
  for (var key in examples) {
    var list = examples[key]["examples"];
    base["paths"]["/" + key]["post"]["requestBody"]["content"]["application/json"]["examples"] = {};
    for (var key2 in list) {
      base["paths"]["/" + key]["post"]["requestBody"]["content"]["application/json"]["examples"]["e" + key2] = list[key2];
    }
  }
  const output = yaml.dump(base);
  fs.writeFileSync(output_yaml, output, 'utf8');
}
