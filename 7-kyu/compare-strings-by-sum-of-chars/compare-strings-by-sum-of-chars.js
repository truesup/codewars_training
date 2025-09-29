function compare(s1, s2) {
  function getValue(str) {
    if (!str) return 0;
    if (/[^a-z]/i.test(str)) return 0;
    return str
      .toUpperCase()
      .split("")
      .reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  }
​
  return getValue(s1) === getValue(s2);
}