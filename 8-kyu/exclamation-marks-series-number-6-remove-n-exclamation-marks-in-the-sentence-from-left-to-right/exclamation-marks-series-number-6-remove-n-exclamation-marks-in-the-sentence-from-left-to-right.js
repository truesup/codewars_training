function remove(s, n) {
  let result = '';
  for (let char of s) {
    if (char === '!' && n > 0) {
      n--;
    } else {
      result += char;
    }
  }
  return result;
}