const { hostname } = require('os');
const { error } = require('console');
const express = require('express');

const app = express();
const port = 1245;

app
  .get('/', (req, res) => {
    res.send('Hello Holberton School!');
  })
  .listen(port, hostname, () => {
    if (error) console.error();
  });

module.exports = app;
