function solve(arr) {
  return arr.reduce((product, subArr) => {
    const uniqueCount = new Set(subArr).size
    return product * uniqueCount
  }, 1)
}
​