function arithmeticSequenceElements(a, d, n) {
  return Array.from({length: n}, (_, i) => a + i * d).join(', ')
}
​