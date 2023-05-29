window.onload = function () {
  const ui = SwaggerUIBundle({
    url: "https://raw.githubusercontent.com/beckn/mobility/main/api/mobility.yaml", // Replace with your Swagger API endpoint
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
