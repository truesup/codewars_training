function thirt(n) {
  const seq = [1, 10, 9, 12, 3, 4];
  
  let prev = -1;
  let current = n;
​
  while (current !== prev) {
    prev = current;
    let digits = String(current).split('').reverse().map(Number);
    current = digits.reduce((sum, digit, i) => sum + digit * seq[i % seq.length], 0);
  }
​
  return current;
}