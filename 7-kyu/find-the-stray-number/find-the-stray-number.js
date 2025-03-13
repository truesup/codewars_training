function stray(numbers) {
  const countObject = {}
​
  for (const num of numbers) {
    countObject[num] = (countObject[num] || 0) + 1
  }
​
  for (const key in countObject) {
    if (countObject[key] === 1) {
      return Number(key)
    }
  }
}
​
​