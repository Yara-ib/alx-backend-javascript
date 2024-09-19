const express = require('express');
const handler = require('./routes');

const app = express();
app.use(handler).listen((1245), () => {
  console.log('Listening on port 1245');
});

module.exports = app;
