#!/usr/bin/env node
const readDatabase = require("../utils");

const filePath = "../../database.csv";

class StudentsController {
  static getAllStudents(request, response) {
    const {csStudents, sweStudents} = readDatabase(filePath);
    const message = "This is the list of our students";
    const csStdts = `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`;
    console.log(csStdts);
    const sweStdts = `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
    console.log(csStdts);
    return response
        .status(200)
	.send(message)
	.send(csStdts)
	.send(sweStdts);
  }
  static getAllStudentsByMajor(request, response) {
    let major = CS || SWE;
    if (!major) {
      return response.status(500).send("Major parameter must be CS or SWE");
    }else {
	const {csStudents, sweStudents} = readDatabase(filePath);
	if (major === CS){
	  return response.status(200).send(`List: ${csStudents.join(', ')}`);
	}else{
	  return response.status(200).send(`List: ${csStudents.join(', ')}`);
	}
    }
  }
}

module.exports = StudentsController
