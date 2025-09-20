function remainder(n, m) {
  const larger = Math.max(n, m);
  const smaller = Math.min(n, m);
​
  if (smaller === 0) return NaN;
​
  return larger % smaller;
}
​