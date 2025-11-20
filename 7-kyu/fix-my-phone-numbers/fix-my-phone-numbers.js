function isItANum(str) {
  const digits = str.replace(/\D/g, '');
  return digits.length === 11 && digits[0] === '0' ? digits : "Not a phone number";
}
​