function wordPattern(word) {
  word = word.toLowerCase()
  const map = {}
  let code = 0
  return word.split('').map(c => {
    if (!(c in map)) map[c] = code++
    return map[c]
  }).join('.')
}
​