function sumDigPow(a, b) {
  const result = [];
​
  for (let num = a; num <= b; num++) {
    const sum = num
      .toString()
      .split('')
      .map((digit, index) => Math.pow(Number(digit), index + 1))
      .reduce((acc, curr) => acc + curr, 0);
​
    if (sum === num) {
      result.push(num);
    }
  }
​
  return result;
}