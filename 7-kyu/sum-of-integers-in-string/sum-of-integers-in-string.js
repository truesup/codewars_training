function sumOfIntegersInString(s) {
  return (s.match(/\d+/g) || [])
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
}
​