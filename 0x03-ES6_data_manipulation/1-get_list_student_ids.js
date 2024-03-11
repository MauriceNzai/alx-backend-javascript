export default function getlistStudentsIds(studentsList) {
  const studentIds = [];

  if (studentsList instanceof (Array) !== true) {
    return studentIds;
  }

  return studentsList.map((student) => student.id);
}
