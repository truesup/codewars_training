function mirror(text) {
  const words = text.split(' ');
  const reversed = words.map(w => w.split('').reverse().join(''));
  const maxLen = Math.max(...reversed.map(w => w.length));
  const border = '*'.repeat(maxLen + 4);
​
  return [
    border,
    ...reversed.map(w => `* ${w.padEnd(maxLen, ' ')} *`),
    border
  ].join('\n');
}
​