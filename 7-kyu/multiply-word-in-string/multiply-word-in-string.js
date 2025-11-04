function modifyMultiply(str, loc, num) {
  const word = str.split(' ')[loc];
  return Array(num).fill(word).join('-');
}
​