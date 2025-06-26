function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
​
  const a1Lengths = a1.map(str => str.length);
  const a2Lengths = a2.map(str => str.length);
​
  const max1 = Math.max(...a1Lengths);
  const min1 = Math.min(...a1Lengths);
  const max2 = Math.max(...a2Lengths);
  const min2 = Math.min(...a2Lengths);
​
  return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1));
}