function multiplyAll(arr) {
  return function(n) {
    return arr.map(x => x * n);
  };
}
​