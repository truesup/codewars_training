function digitalRoot(num) {
  let sum = num
    .toString()
    .split('')
    .map(Number)
    .reduce((sum, el) => sum + el, 0);
​
  return sum < 10 ? sum : digitalRoot(sum);
}