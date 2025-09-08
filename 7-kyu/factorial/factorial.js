function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("Input must be between 0 and 12");
  }
  
  if (n === 0) return 1;
  
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
​