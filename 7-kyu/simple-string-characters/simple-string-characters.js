function solve(s) {
  let upper = 0, lower = 0, digits = 0, special = 0;
  
  for (let ch of s) {
    if (/[A-Z]/.test(ch)) upper++;
    else if (/[a-z]/.test(ch)) lower++;
    else if (/[0-9]/.test(ch)) digits++;
    else special++;
  }
  
  return [upper, lower, digits, special];
}
​