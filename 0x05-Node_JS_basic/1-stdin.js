#!/usr/bin/env node
process.stdout.write('Welome to Holberton School, what is your name?\n');

process.stdin.on('readable', function () {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  } else {
   // process.stdout.write('Please enter your name');
  }
});

process.stdin.on('end', function () {
  console.log('This important software is now closing');
});
