const orderedCount = function (text) {
  const result = [];
  const seen = new Set();
​
  for (let char of text) {
    if (!seen.has(char)) {
      seen.add(char);
      const count = [...text].filter(c => c === char).length;
      result.push([char, count]);
    }
  }
​
  return result;
};