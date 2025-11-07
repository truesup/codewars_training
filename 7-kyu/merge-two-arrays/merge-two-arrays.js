function mergeArrays(a, b) {
  let res = [];
  let max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (i < a.length) res.push(a[i]);
    if (i < b.length) res.push(b[i]);
  }
  return res;
}
​