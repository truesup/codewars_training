function newAvg(arr, newavg) {
  const sum = arr.reduce((a, b) => a + b, 0);
  const n = arr.length;
  const x = Math.ceil(newavg * (n + 1) - sum);
​
  if (x <= 0) throw new Error("Expected New Average is too low");
  return x;
}
​