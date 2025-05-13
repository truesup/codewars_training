function nbDig(n, d) {
  let count = 0;
  const digit = d.toString();
​
  for (let k = 0; k <= n; k++) {
    const square = (k * k).toString();
    for (let char of square) {
      if (char === digit) {
        count++;
      }
    }
  }
​
  return count;
}