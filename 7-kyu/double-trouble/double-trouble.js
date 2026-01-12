function trouble(x, t) {
  const res = []
  for (let i = 0; i < x.length; i++) {
    const cur = x[i]
    if (res.length && res[res.length - 1] + cur === t) continue
    res.push(cur)
  }
  return res
}
​