#!/usr/bin/env node

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.send('Hello Holberton School!');
});

app.listen(1245, function () {
  console.log('Server running at: 127.0.0.0:1245');
});

module.exports = app;