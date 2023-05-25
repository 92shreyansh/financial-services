const fs = require('fs');
const yaml = require('js-yaml');

const args = process.argv.slice(2);
const in_file = args[0]
const out_file = args[1]
const config_yaml = fs.readFileSync(in_file, 'utf8');
const config = yaml.load(config_yaml);
const template_path = config.template.url;
const template_dict = config.template.dict;
const payload_yaml = fs.readFileSync(template_path, 'utf8');
const resolved_yaml = resolveTemplate(payload_yaml, template_dict)
const resolved_json = JSON.stringify(yaml.load(resolved_yaml), null, 4)
fs.writeFileSync(out_file, resolved_json, 'utf8');

function resolveTemplate(template, values) {
return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return values[key] !== undefined ? values[key] : match;
});
}