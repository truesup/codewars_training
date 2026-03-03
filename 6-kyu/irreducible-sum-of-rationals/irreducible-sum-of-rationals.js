function sumFracts(l) {
  if (!l || l.length === 0) return null;
  
  const gcd = (a, b) => {
    while (b) [a, b] = [b, a % b];
    return a;
  };
  
  let num = 0;
  let den = 1;
  
  for (let [n, d] of l) {
    num = num * d + n * den;
    den = den * d;
    const g = gcd(Math.abs(num), den);
    num /= g;
    den /= g;
  }
  
  return den === 1 ? num : [num, den];
}