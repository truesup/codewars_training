function tribonacci(signature, n) {
  if (n === 0) return [];
  const result = signature.slice(0, n);
​
  while (result.length < n) {
    const nextVal = result.slice(-3).reduce((a, b) => a + b, 0);
    result.push(nextVal);
  }
​
  return result;
}