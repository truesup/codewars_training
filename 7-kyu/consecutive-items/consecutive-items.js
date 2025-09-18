function consecutive(arr, a, b) {
  const iA = arr.indexOf(a);
  const iB = arr.indexOf(b);
  return Math.abs(iA - iB) === 1;
}
​