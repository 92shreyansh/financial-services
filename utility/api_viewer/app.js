const express = require('express');
const app = express();
const path = require('path');
const port = 3000; // Change the port number as desired

app.use(express.static(path.join(__dirname, '/')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
