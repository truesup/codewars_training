function checkThreeAndTwo(array) {
  let counts = {};
  for (let char of array) counts[char] = (counts[char] || 0) + 1;
  return Object.values(counts).sort().join(',') === '2,3';
}
​