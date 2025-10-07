function solve(arr){
  const sorted = arr.slice().sort((a,b) => b - a)
  const res = []
  while (sorted.length) {
    if (sorted.length) res.push(sorted.shift())
    if (sorted.length) res.push(sorted.pop())
  }
  return res
}
​