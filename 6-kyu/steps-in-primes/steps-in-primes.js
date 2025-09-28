function step(g, m, n) {
  function isPrime(num) {
    if (num < 2) return false;
    if (num % 2 === 0) return num === 2;
    let sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
​
  for (let i = m; i <= n - g; i++) {
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g];
    }
  }
​
  return null;
}
​