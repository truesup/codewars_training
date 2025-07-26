function dashatize(num) {
  if (num === null) return "NaN";
  
  return Math.abs(num)
    .toString()
    .split('')
    .map(d => d % 2 === 1 ? '-' + d + '-' : d)
    .join('')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}