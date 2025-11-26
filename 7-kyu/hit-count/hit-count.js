function counterEffect(hitCount) {
  return hitCount.split('').map(n => {
    const d = Number(n)
    return Array.from({ length: d + 1 }, (_, i) => i)
  })
}
​