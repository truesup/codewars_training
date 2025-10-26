function lastDigit(n, d) {
  if (d <= 0) return [];
  let arr = String(Math.abs(n)).split('').map(Number);
  return arr.slice(-d);
}
​