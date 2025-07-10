function chooseBestSum(t, k, ls) {
  let max = null;
​
  function helper(start, combo) {
    if (combo.length === k) {
      const sum = combo.reduce((a, b) => a + b, 0);
      if (sum <= t && (max === null || sum > max)) {
        max = sum;
      }
      return;
    }
​
    for (let i = start; i < ls.length; i++) {
      helper(i + 1, [...combo, ls[i]]);
    }
  }
​
  helper(0, []);
  return max;
}