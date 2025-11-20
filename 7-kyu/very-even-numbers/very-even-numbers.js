function isVeryEvenNumber(n) {
  while (n > 9) {
    n = String(n).split('').reduce((a, b) => a + +b, 0)
  }
  return n % 2 === 0
}
​