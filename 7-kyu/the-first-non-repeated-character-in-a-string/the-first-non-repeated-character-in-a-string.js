function firstNonRepeated(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  for (const c of s) if (freq[c] === 1) return c;
  return null;
}
​