function digPow(n, p) {
  const sum = n
    .toString()
    .split('')
    .reduce((acc, d, i) => acc + Math.pow(+d, p + i), 0);
  return sum % n === 0 ? sum / n : -1;
}