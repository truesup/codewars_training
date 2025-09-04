function squares(x, n) {
  if (n <= 0) return [];
  let result = [x];
  for (let i = 1; i < n; i++) {
    result.push(result[i - 1] ** 2);
  }
  return result;
}
​