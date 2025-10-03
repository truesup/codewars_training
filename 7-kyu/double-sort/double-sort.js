function dbSort(a){
  const nums = a.filter(x => typeof x === 'number').sort((a,b) => a - b)
  const strs = a.filter(x => typeof x === 'string').sort()
  return [...nums, ...strs]
}
​