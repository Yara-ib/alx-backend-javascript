const { createServer } = require('node:http');
const { error } = require('node:console');
const { hostname } = require('node:os');

const port = 1245;
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  if (error) console.error();
});
module.exports = app;
