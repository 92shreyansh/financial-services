// window.onload = function () {
//   const ui = SwaggerUIBundle({
//     url: "https://raw.githubusercontent.com/beckn/mobility/main/api/mobility.yaml", // Replace with your Swagger API endpoint
//     dom_id: '#swagger-ui',
//     presets: [
//       SwaggerUIBundle.presets.apis,
//       SwaggerUIStandalonePreset
//     ],
//     layout: "BaseLayout",
//     deepLinking: true
//   });

//   window.ui = ui;
// };


window.onload = function () {
  const dropdown = document.getElementById('example-dropdown'); // Replace 'dropdown' with the ID of your dropdown element
    dropdown.innerHTML = '';
      var option = document.createElement('option');
      option.text = "1";
      dropdown.add(option);
      option = document.createElement('option');
      option.text = "2";
      dropdown.add(option);
  loadSwaggerUI()
}



function loadSwaggerUI() {
    // let url = Math.random() < 0.5?"https://raw.githubusercontent.com/beckn/mobility/main/api/mobility.yaml":"https://raw.githubusercontent.com/beckn/protocol-specifications/master/api/transaction/build/transaction.yaml"
    let url = "https://raw.githubusercontent.com/beckn/mobility/main/api/mobility.yaml"//"https://raw.githubusercontent.com/beckn/protocol-specifications/master/api/transaction/build/transaction.yaml"
    const ui = SwaggerUIBundle({
      url: url,
      dom_id: '#swagger-ui',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      layout: "BaseLayout",
      deepLinking: true
    });
    window.ui = ui
};


// function getSwaggerYaml(example_set, outputPath){
//   const tempPath = `./temp.yaml`;
//   $RefParser.dereference(unresolvedFilePath)
//     .then((schema) => {
//       spec = schema;
//       return $RefParser.dereference(example_set)
//     })
//     .then((schema) => {
//       examples = schema;
//       GenerateYaml(spec, examples, tempPath);
//       buildSwagger(tempPath, outputPath);
//       cleanup()
//     })
//     .catch((error) => {
//       console.error('Error parsing schema:', error);
//     });

// }

// function cleanup() {
//   try {
//     fs.unlinkSync(tempPath);
//     console.log('Temporary file deleted');
//   } catch (error) {
//     console.error('Error deleting temporary file:', error);
//   }
// }

// function buildSwagger(inPath, outPath) {
//   try {
//     const command = `swagger-cli bundle ${inPath} --outfile ${outPath} -t yaml`;
//     execSync(command, { stdio: 'inherit' });
//   } catch (error) {
//     console.error('An error occurred while generating the Swagger bundle:', error);
//     process.exit(1);
//   }
// }

// function GenerateYaml(base, examples, output_yaml) {
//   for (var key in examples) {
//     var list = examples[key]["examples"];
//     base["paths"]["/" + key]["post"]["requestBody"]["content"]["application/json"]["examples"] = {};
//     for (var key2 in list) {
//       base["paths"]["/" + key]["post"]["requestBody"]["content"]["application/json"]["examples"]["e" + key2] = list[key2];
//     }
//   }
//   const output = yaml.dump(base);
//   fs.writeFileSync(output_yaml, output, 'utf8');
// }