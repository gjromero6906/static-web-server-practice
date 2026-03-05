const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
// the file path to the dist directory
const pathToFrontend = path.join(__dirname, '../frontend/dist');

// generate middleware using the file path
const serveStatic = express.static(pathToFrontend);

// Register the serveStatic middleware before the remaining controllers
app.use(serveStatic);

// other controllers 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});