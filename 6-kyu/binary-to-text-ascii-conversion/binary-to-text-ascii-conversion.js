function binaryToString(binary) {
  let res = '';
  for (let i = 0; i < binary.length; i += 8) {
    res += String.fromCharCode(parseInt(binary.slice(i, i + 8), 2));
  }
  return res;
}
​