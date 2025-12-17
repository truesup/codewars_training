function scramble(str, arr) {
  const res = Array(str.length);
  for (let i = 0; i < str.length; i++) {
    res[arr[i]] = str[i];
  }
  return res.join('');
}
​