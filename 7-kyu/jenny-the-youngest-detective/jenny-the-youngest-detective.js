function missingWord(nums, str) {
  const letters = str.replace(/ /g, '').toLowerCase()
  nums.sort((a, b) => a - b)
  let result = ''
  for (const n of nums) {
    if (n < 0 || n >= letters.length) return "No mission today"
    result += letters[n]
  }
  return result
}
​