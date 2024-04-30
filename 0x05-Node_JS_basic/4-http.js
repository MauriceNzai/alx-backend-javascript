#!/usr/bin/env node
const http = require('http');
const app = http.createServer(function (req, res) {
  if (req.url) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  }
});

app.listen(1245, function () {
  console.log('Server running at 127.0.0.0:1245');
});

module.exports = app;
