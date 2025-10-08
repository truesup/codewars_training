function prefill(n, v) {
  if (n === 0 || n === '0') return []
  if (!/^\d+$/.test(n)) throw new TypeError(`${n} is invalid`)
  return Array(Number(n)).fill(v)
}
​