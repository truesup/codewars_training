function alphabetic(s) {
  for (let i = 1; i < s.length; i++) {
    if (s[i] < s[i - 1]) return false
  }
  return true
}
​