#!/usr/bin/env node
const fs = require('fs');

async function readDatabase(filePath){
  //const fs = require('fs');
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
    const students = data.split('\n')
      .map((student) => student.split(','))
      .filter((student) => student.length === 4 && student[0] !== 'firstname')
      .map((student) => ({
        firstName: student[0],
        lastName: student[1],
        age: student[2],
        field: student[3]
      }));
      const csStudents = students
	  .filter((student) => student.field === 'CS')
      	  .map((student) => student.firstName);
      console.log(csStudents);
      const sweStudents = students
	  .filter((student) => student.field === 'SWE')
      	  .map((student) => student.firstName);
      console.log(sweStudents);
      console.log({csStudents, sweStudents})
      return {csStudents, sweStudents};
  } catch(err) {
	throw Error('Cannot load the database');
	  return;
  }
}

module.exports =  readDatabase;
