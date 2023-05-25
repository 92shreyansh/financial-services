const fs = require('fs');
const yaml = require('js-yaml');

const args = process.argv.slice(2);
var example_set = args[0]
var baseYaml = args[1]
var result = args[2]
const examples_yaml = fs.readFileSync(`${example_set}`, 'utf8');
const examples = yaml.load(examples_yaml);
const spec_yaml = fs.readFileSync(baseYaml, 'utf8');
const spec = yaml.load(spec_yaml);

// console.log(examples)

for(var key in examples){
    var list = examples[key]["examples"]
    spec["paths"]["/"+key]["post"]["requestBody"]["content"]["application/json"]["examples"] = {};
    for(var key2 in list){
        spec["paths"]["/"+key]["post"]["requestBody"]["content"]["application/json"]["examples"]["e"+key2] = list[key2];
    }
} 

const output_yaml = yaml.dump(spec);

fs.writeFileSync(result, output_yaml, 'utf8');