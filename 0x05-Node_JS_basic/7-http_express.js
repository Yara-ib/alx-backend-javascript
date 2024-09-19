const express = require('express');
const { hostname } = require('os');
const { error } = require('console');
const countStudents = require('./7-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res
        .status(500)
        .send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(port, hostname, () => {
  if (error) console.error();
});

module.exports = app;
