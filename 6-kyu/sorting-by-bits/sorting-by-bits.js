function sortByBit(arr) {
  const countBits = n => n.toString(2).replace(/0/g, '').length
​
  return arr.sort((a, b) => {
    const diff = countBits(a) - countBits(b)
    return diff !== 0 ? diff : a - b
  })
}
​