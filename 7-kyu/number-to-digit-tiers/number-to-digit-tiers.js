function createArrayOfTiers(num) {
  const s = String(num)
  const result = []
​
  for (let i = 1; i <= s.length; i++) {
    result.push(s.slice(0, i))
  }
​
  return result
}
​