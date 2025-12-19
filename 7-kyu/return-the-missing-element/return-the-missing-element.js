function getMissingElement(superImportantArray) {
  const total = 45
  const sum = superImportantArray.reduce((a, b) => a + b, 0)
  return total - sum
}
​