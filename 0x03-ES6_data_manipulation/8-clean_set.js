export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string') return '';
  if (!set || !startString || startString.length <= 0) return '';

  // convert set to an array of strings
  const words = [...set];
  return words
    // filter only words that begin with startString
    .filter((word) => word.startsWith(startString))
    // map and slice word from startString.length then join all by '-'
    .map((word) => word.slice(startString.length))
    .join('-');
}
