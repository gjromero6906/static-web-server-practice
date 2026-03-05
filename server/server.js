const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
// the file path to the dist directory
const pathToFrontend = path.join(__dirname, '../frontend/dist');

// generate middleware using the file path
const serveStatic = express.static(pathToFrontend);

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next(); // pass to the next handler
};

app.use(serveStatic);

app.use(logRoutes);
const serveHTML = (req, res, next) => {
  res.send('<h1>Welcome to the API</h1>');
};

const serveHello = (req, res, next) => {
  res.send({ message: 'hello!' });
};

const serve404 = (req, res, next) => {
  res.status(404).send({ error: `Not found: ${req.originalUrl}` });
}
app.get('/', serveHTML);
app.get('/api/hello', serveHello);
app.use(serve404);

// other controllers 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});