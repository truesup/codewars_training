function autocomplete(input, dictionary) {
  const cleaned = input.replace(/[^a-z]/gi, '').toLowerCase()
  if (!cleaned) return []
​
  const res = []
  for (const word of dictionary) {
    if (word.toLowerCase().startsWith(cleaned)) {
      res.push(word)
      if (res.length === 5) break
    }
  }
  return res
}
​