function mixedFraction(s){
  let [x, y] = s.split('/').map(Number);
  if (y === 0) throw new Error("ZeroDivisionError");
  
  let sign = (x * y < 0) ? "-" : "";
  x = Math.abs(x);
  y = Math.abs(y);
  
  let a = Math.floor(x / y);
  let b = x % y;
  if (b === 0) return sign + a;
  
  const gcd = (m,n)=> n?gcd(n,m%n):m;
  let g = gcd(b,y);
  b /= g; y /= g;
  
  if (a === 0) return sign + b + "/" + y;
  
  return sign + a + " " + b + "/" + y;
}
​