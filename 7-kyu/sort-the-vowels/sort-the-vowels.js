function sortVowels(s) {
  if (typeof s !== 'string') return '';
  const vowels = new Set(['a','e','i','o','u']);
  return s
    .split('')
    .map(c => vowels.has(c.toLowerCase()) ? `|${c}` : `${c}|`)
    .join('\n');
}
​