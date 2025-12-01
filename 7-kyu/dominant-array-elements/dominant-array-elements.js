function solve(arr) {
  const res = [];
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      res.push(arr[i]);
      max = arr[i];
    }
  }
  return res.reverse();
}
​