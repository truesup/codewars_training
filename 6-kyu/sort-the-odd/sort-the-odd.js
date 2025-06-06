function sortArray(array) {
  const odds = array.filter(n => n % 2 !== 0).sort((a, b) => a - b)
  return array.map(n => (n % 2 !== 0 ? odds.shift() : n))
}