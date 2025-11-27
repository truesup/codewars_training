function permuteAPalindrome(input) {
  const m = {};
  for (let c of input) m[c] = (m[c] || 0) + 1;
  let odd = 0;
  for (let k in m) if (m[k] % 2) odd++;
  return odd <= 1;
}
​