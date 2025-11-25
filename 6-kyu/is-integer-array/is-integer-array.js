function isIntArray(arr) {
  if (!Array.isArray(arr)) return false
  for (const n of arr) {
    if (typeof n !== "number" || !Number.isFinite(n) || n % 1 !== 0) {
      return false
    }
  }
  return true
}
​