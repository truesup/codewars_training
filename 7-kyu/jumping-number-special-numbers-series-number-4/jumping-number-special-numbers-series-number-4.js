function jumpingNumber(n){
  let s = String(n);
  if (s.length === 1) return "Jumping!!";
  for (let i = 1; i < s.length; i++) {
    if (Math.abs(s[i] - s[i-1]) !== 1) return "Not!!";
  }
  return "Jumping!!";
}
​