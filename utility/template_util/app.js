const fs = require('fs');
const yaml = require('js-yaml');

const config_yaml = fs.readFileSync("./payload.yaml", 'utf8');
const config = yaml.load(config_yaml);
const template_path = config.template.url;
const template_dict = config.template.dict;
const payload_json = fs.readFileSync(template_path, 'utf8');

console.log("resolvedValue: "+ resolveTemplate(payload_json, template_dict))

function resolveTemplate(template, values) {
return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return values[key] !== undefined ? values[key] : match;
});
}