function gap(g, m, n) {
  const isPrime = x => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) return false;
    }
    return true;
  };
​
  let prev = null;
​
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (prev !== null && i - prev === g) {
        return [prev, i];
      }
      prev = i;
    }
  }
​
  return null;
}
​