function towerBuilder(nFloors) {
  const result = []
​
  for (let i = 1; i <= nFloors; i++) {
    const spaces = ' '.repeat(nFloors - i)
    const stars = '*'.repeat(2 * i - 1)
    const finalString = spaces + stars + spaces
    result.push(finalString)
  }
​
  return result
}