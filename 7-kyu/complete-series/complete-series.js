function completeSeries(arr) {
  if (new Set(arr).size !== arr.length) return [0]
  const max = Math.max(...arr)
  return Array.from({ length: max + 1 }, (_, i) => i)
}
​