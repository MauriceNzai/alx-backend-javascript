export default function createIteratorObject(report) {
  const result = [];
  for (const obj of Object.values(report.allEmployees)) {
    result.push(...obj);
  }
  return result;
}
