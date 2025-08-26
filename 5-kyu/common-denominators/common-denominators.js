function convertFrac(lst){
  if (lst.length === 0) return "";
  
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  const lcm = (a, b) => (a * b) / gcd(a, b);
  
  let commonDenom = lst.reduce((acc, [_, d]) => lcm(acc, d), 1);
  
  return lst.map(([n, d]) => `(${n * (commonDenom / d)},${commonDenom})`).join("");
}
​