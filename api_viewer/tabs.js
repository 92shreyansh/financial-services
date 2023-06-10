
// tabs.js

function openTab(evt, tabName) {
  // Hide all tab content
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Remove active class from all tab buttons
  var tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }

  // Show the selected tab content
  document.getElementById(tabName).style.display = "block";

  // Add the active class to the clicked tab button
  evt.currentTarget.className += " active";
}

// Open the first tab by default
document.getElementById('swagger-tab').style.display = "block";
document.getElementsByClassName("tab-button")[0].className += " active";

window.onload = function () {
  document.getElementById('file-input').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const openApiYaml = event.target.result;
      loadSwaggerUIFile(openApiYaml)
      let data = jsyaml.load(openApiYaml)
      initSchema(data["x-enum"])
      initTag(data["x-tags"])
      loadFlow(data["x-flows"])
    };

    reader.readAsText(file);
  });

}