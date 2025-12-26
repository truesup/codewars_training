function buddy(start, limit) {
  function sumDiv(n) {
    if (n === 1) return 0;
    let sum = 1;
    const r = Math.sqrt(n);
    for (let i = 2; i <= r; i++) {
      if (n % i === 0) {
        sum += i;
        const j = n / i;
        if (j !== i) sum += j;
      }
    }
    return sum;
  }
​
  for (let n = start; n <= limit; n++) {
    const m = sumDiv(n) - 1;
    if (m > n && sumDiv(m) === n + 1) {
      return [n, m];
    }
  }
  return "Nothing";
}
​