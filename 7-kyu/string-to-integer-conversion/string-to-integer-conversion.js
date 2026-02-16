function myParseInt(str) {
  if (/^\s*\d+\s*$/.test(str)) {
    return Number(str.trim());
  }
  return "NaN";
}
​