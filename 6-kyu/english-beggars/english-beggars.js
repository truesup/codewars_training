function beggars(values, n) {
  if (n === 0) return [];
​
  let result = Array(n).fill(0);
​
  for (let i = 0; i < values.length; i++) {
    result[i % n] += values[i];
  }
​
  return result;
}
​