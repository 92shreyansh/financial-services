// script.js
window.onload = function () {
  // let url = Math.random() < 0.5?"https://raw.githubusercontent.com/beckn/mobility/main/api/mobility.yaml":"https://raw.githubusercontent.com/beckn/protocol-specifications/master/api/transaction/build/transaction.yaml"
  let url = "https://raw.githubusercontent.com/tanya-ondc/B2B-1.5/main/api/build/B2Bv2.0.1.yaml"
  //"https://raw.githubusercontent.com/beckn/protocol-specifications/master/api/transaction/build/transaction.yaml"
  loadSwaggerUI(url)
  populateEnums(url);
}

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
