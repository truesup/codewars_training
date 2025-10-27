function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";
  return string.split('').filter((_, i) => (i + 1) % 2 === 0);
}
​