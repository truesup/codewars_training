function gcdi(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
}
​
function lcmu(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  return a && b ? (a * b) / gcdi(a, b) : 0;
}
​
function som(a, b) {
  return a + b;
}
​
function maxi(a, b) {
  return Math.max(a, b);
}
​
function mini(a, b) {
  return Math.min(a, b);
}
​
function operArray(fct, arr, init) {
  const res = [];
  let acc = init;
  for (let i = 0; i < arr.length; i++) {
    acc = fct(acc, arr[i]);
    res.push(acc);
  }
  return res;
}