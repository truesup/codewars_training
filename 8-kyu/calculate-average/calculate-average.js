function findAverage(array) {
  return array.length === 0 ? 0 : array.reduce((sum, el) => sum + el, 0) / array.length
}