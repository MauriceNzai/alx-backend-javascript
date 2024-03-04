export default function appendToEachArrayValue (array, appendString) {
  const newArray = [];
  for (let elem of array) {
    elem = appendString + elem;
    newArray.push(elem);
  }
  array = newArray;
  return array;
}
