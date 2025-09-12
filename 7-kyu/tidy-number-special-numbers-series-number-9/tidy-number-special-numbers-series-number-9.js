function tidyNumber(n){
  let digits = String(n).split('');
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] > digits[i + 1]) return false;
  }
  return true;
}
​