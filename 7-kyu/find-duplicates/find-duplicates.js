function duplicates(arr) {
  const seen = new Set();
  const dupes = new Set();
  for (const x of arr) {
    if (seen.has(x)) dupes.add(x);
    else seen.add(x);
  }
  return [...dupes];
}
​