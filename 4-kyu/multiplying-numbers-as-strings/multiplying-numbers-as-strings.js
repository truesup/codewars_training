function multiply(a, b) {
  if (a === "0" || b === "0") return "0";
​
  const m = a.length, n = b.length;
  const result = Array(m + n).fill(0);
​
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = (a[i] - '0') * (b[j] - '0');
      const sum = mul + result[i + j + 1];
​
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }
​
  return result.join('').replace(/^0+/, '');
}
​