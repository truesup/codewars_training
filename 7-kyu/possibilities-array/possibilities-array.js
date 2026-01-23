function isAllPossibilities(x){
  if(!x.length) return false
  const n = x.length
  return [...new Set(x)].length === n && x.every(v => v >= 0 && v < n)
}
​