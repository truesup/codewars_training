function singleDigit(n) {
  while (n >= 10) {
    n = n.toString(2).split('').reduce((s, b) => s + (b === '1'), 0);
  }
  return n;
}
​