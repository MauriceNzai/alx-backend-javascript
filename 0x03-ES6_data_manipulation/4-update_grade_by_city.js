function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList) || !Array.isArray(newGrades)) {
    return [];
  }
  return studentsList.filter((student) => student.location === city).map((student) => {
    const [newGrade] = newGrades.filter((item) => {
      const isId = item.studentId === student.id;
      return isId;
    });
    // console.log(newGrade);
    const { grade = 'N/A' } = newGrade || {};
    return {
      ...student,
      grade, // : newGrade ? newGrade.grade : 'N/A'
    };
  });
}

module.exports = updateStudentGradeByCity;
