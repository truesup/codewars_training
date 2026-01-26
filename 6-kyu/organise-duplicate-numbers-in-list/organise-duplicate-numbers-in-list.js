function group(arr){
  const seen = new Map()
  for(const n of arr){
    if(!seen.has(n)) seen.set(n, [])
    seen.get(n).push(n)
  }
  return [...seen.values()]
}
​