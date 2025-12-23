function factory(x) {
  return function(arr) {
    return arr.map(n => n * x);
  };
}
​