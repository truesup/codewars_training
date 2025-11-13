function stringExpansion(s) {
  let num = 1, res = '';
  for (let i = 0; i < s.length; i++) {
    if (/\d/.test(s[i])) num = +s[i];
    else res += s[i].repeat(num);
  }
  return res;
}
​