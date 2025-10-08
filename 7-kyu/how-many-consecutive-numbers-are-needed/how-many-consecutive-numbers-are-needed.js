function consecutive(array) {
  if (array.length < 2) return 0
  return Math.max(...array) - Math.min(...array) + 1 - array.length
}
​