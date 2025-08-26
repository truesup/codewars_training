function explode(s) {
  return s.split('').map(d => d.repeat(Number(d))).join('');
}
​