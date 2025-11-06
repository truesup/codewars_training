function unusedDigits() {
  const used = new Set([...arguments].join(''));
  return "0123456789".split('').filter(d => !used.has(d)).join('');
}
​