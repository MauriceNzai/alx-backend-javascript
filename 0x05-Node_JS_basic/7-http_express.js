#!/usr/bin/env node
const express = require('express');
const students = require('./3-read_file_async');
const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.writeHead(200, { 'Conten-Type': 'text/plain' });
  res.write('This is the list of our students\n');
  await students(process.argv[2]).then((data) => {
    res.write(`Number of students: ${data.students.length}\n`);
    res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}\n`);
    res.end();
  }).catch((err) => res.end(err.message))
    .finally(() => {
      res.end();
    });
});

app.listen(1246, () => {
  console.log('Server running at 127.0.0.0:1245');
});

module.exports = app;
