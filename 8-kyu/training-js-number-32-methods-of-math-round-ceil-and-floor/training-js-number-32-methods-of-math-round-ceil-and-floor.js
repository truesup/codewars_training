function roundIt(n) {
  let [left, right] = String(n).split('.');
​
  return left.length < right.length
    ? Math.ceil(n)
    : left.length > right.length
    ? Math.floor(n)
    : Math.round(n);
}
​