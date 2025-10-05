function maxBall(v0) {
  const v = v0 * 1000 / 3600
  const g = 9.81
  const t = v / g
  return Math.round(t * 10)
}
​