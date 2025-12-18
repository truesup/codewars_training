function solve(a) {
  let even = 0;
  let odd = 0;
​
  for (const v of a) {
    const num = Number(v);
    if (Number.isInteger(num)) {
      if (num % 2 === 0) even++;
      else odd++;
    }
  }
​
  return even - odd;
}
​