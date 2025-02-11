function getRandomChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}
​
function rndCode() {
  let code = '';
  const upperLetters = 'ABCDEFGHIJKLM';
  const digits = '1234567890';
  const symbols = '~!@#$%^&*';
​
  for (let i = 0; i < 2; i++) {
    code += getRandomChar(upperLetters);
  }
  for (let i = 0; i < 4; i++) {
    code += getRandomChar(digits);
  }
  for (let i = 0; i < 2; i++) {
    code += getRandomChar(symbols);
  }
​
  return code;
}
​
console.log(rndCode());
​