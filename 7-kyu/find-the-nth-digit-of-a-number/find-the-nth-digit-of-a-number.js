function findDigit(num, nth) {
  if (nth <= 0) return -1;
​
  const digits = Math.abs(num).toString().split('').reverse();
  return digits[nth - 1] ? parseInt(digits[nth - 1]) : 0;
}