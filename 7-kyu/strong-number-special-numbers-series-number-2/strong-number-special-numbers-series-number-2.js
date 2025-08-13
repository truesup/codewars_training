function strong(n) {
  const factorial = x => x <= 1 ? 1 : x * factorial(x - 1);
  
  const sum = n
    .toString()
    .split('')
    .reduce((acc, digit) => acc + factorial(Number(digit)), 0);
  
  return sum === n ? "STRONG!!!!" : "Not Strong !!";
}