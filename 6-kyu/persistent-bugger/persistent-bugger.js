function persistence(num) {
  let count = 0;
  while (num >= 10) {
    num = num
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => a * b);
    count++;
  }
  return count;
}