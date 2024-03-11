export default function getStudentIdsSum(studentsList) {
  if (Array.isArray(studentsList)) {
    return studentsList.reduce((accum, student) => accum + student.id, 0);
  }
  return [];
}
