// script.js
// window.onload = function () {
//   // let url = Math.random() < 0.5?"https://raw.githubusercontent.com/beckn/mobility/main/api/mobility.yaml":"https://raw.githubusercontent.com/beckn/protocol-specifications/master/api/transaction/build/transaction.yaml"
//   let url = "https://raw.githubusercontent.com/tanya-ondc/B2B-1.5/main/api/build/B2Bv2.0.1.yaml"
//   //"https://raw.githubusercontent.com/beckn/protocol-specifications/master/api/transaction/build/transaction.yaml"
//   loadSwaggerUI(url)
//   populateEnums(url);
// }

window.onload = function () {
  // let url = "https://raw.githubusercontent.com/tanya-ondc/B2B-1.5/main/api/build/B2Bv2.0.1.yaml"
  document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const openApiYaml = event.target.result;
      loadSwaggerUIFile(openApiYaml)
      let data = jsyaml.load(openApiYaml)
      initSchema(data["x-enum"])
      initTag(data["x-tags"])
    };

    reader.readAsText(file);
  });
  // loadSwaggerUI(url)
  // populateEnums(url);
}



function loadSwaggerUIFile(openApiYaml) {
  const ui = SwaggerUIBundle({
    spec: jsyaml.load(openApiYaml),
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "BaseLayout",
    deepLinking: true
  });
  window.ui = ui;
};

function loadSwaggerYaml() {
  var inputText = document.getElementById('swagger_url').value;
  var result = inputText.toLowerCase();
  loadSwaggerUI(result)
}

function display(result) {
  document.getElementById('output').innerText = result;
}

function loadSwaggerUI(url) {
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
