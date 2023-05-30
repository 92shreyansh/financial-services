const fs = require('fs');
const yaml = require('js-yaml');
const $RefParser = require('json-schema-ref-parser');
const { execSync } = require('child_process');

const args = process.argv.slice(2);
var example_set = args[0];

const outputPath = `./build.yaml`;
const unresolvedFilePath = `https://raw.githubusercontent.com/beckn/protocol-specifications/master/api/transaction/components/index.yaml`
const tempPath = `./temp.yaml`;

getSwaggerYaml(example_set, outputPath);
function getSwaggerYaml(example_set, outputPath){
  $RefParser.dereference(unresolvedFilePath)
    .then((schema) => {
      spec = schema;
      return $RefParser.dereference(example_set)
    })
    .then((schema) => {
      examples = schema;
      GenerateYaml(spec, examples, tempPath);
      buildSwagger(tempPath, outputPath);
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

function GenerateYaml(base, examples, output_yaml) {
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
