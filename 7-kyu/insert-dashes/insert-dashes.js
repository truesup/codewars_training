function insertDash(num) {
  let str = String(num);
  let result = str[0];
  
  for (let i = 1; i < str.length; i++) {
    if (parseInt(str[i - 1]) % 2 === 1 && parseInt(str[i]) % 2 === 1) {
      result += "-" + str[i];
    } else {
      result += str[i];
    }
  }
  
  return result;
}
​