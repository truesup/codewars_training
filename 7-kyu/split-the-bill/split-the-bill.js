function splitTheBill(x) {
  const values = Object.values(x)
  const avg = values.reduce((a, b) => a + b, 0) / values.length
  const res = {}
  for (const k in x) {
    res[k] = +(x[k] - avg).toFixed(2)
  }
  return res
}
​