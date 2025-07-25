function highestRank(arr) {
  const counts = {};
​
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }
​
  let maxFreq = 0;
  let result = -Infinity;
​
  for (const num in counts) {
    const count = counts[num];
    const value = Number(num);
    if (
      count > maxFreq ||
      (count === maxFreq && value > result)
    ) {
      maxFreq = count;
      result = value;
    }
  }
​
  return result;
}