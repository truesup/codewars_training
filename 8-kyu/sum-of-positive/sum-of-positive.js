function positiveSum(arr) {
  return arr.filter(el => el > 0).reduce((sum, el) => sum + el, 0);
}