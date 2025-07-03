function sumPairs(ints, s) {
  const seen = new Set();
  for (let i = 0; i < ints.length; i++) {
    const needed = s - ints[i];
    if (seen.has(needed)) {
      return [needed, ints[i]];
    }
    seen.add(ints[i]);
  }
  return undefined;
}