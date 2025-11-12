function pendulum(values) {
  const sorted = values.slice().sort((a, b) => a - b);
​
  const result = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i % 2 === 0) result.unshift(sorted[i]);
    else result.push(sorted[i]);
  }
​
  return result;
}
​