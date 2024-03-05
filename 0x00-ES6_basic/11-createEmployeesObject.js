export default function createEmployeesObject(departmentName, employees) {
  const EMPS = { [departmentName]: [...employees] };
  return EMPS;
}
