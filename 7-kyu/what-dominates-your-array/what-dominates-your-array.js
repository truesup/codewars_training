function dominator(arr) {
  const freq = {};
  const half = arr.length / 2;
​
  for (const n of arr) {
    freq[n] = (freq[n] || 0) + 1;
    if (freq[n] > half) return n;
  }
​
  return -1;
}
​