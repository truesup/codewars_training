function vaporcode(string) {
  return string.replace(/\s+/g, '').toUpperCase().split('').join('  ');
}
​