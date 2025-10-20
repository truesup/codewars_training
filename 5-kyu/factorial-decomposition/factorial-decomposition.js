function decomp(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (primes.every(p => i % p !== 0)) primes.push(i);
  }
​
  const factors = primes.map(p => {
    let count = 0;
    let m = n;
    while (m >= p) {
      m = Math.floor(m / p);
      count += m;
    }
    return count > 1 ? `${p}^${count}` : `${p}`;
  });
​
  return factors.join(' * ');
}
​