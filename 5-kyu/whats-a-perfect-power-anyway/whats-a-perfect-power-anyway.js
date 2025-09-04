function isPP(n) {
  for (let k = 2; k <= Math.log2(n); k++) {
    let m = Math.round(Math.pow(n, 1 / k));
    if (Math.pow(m, k) === n) {
      return [m, k];
    }
  }
  return null;
}
​