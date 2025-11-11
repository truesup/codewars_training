function makeValley(arr) {
  arr = [...arr].sort((a,b)=>b-a)
  let left = [], right = []
  for (let i = 0; i < arr.length; i++) {
    (i % 2 === 0 ? left : right).push(arr[i])
  }
  return [...left, ...right.reverse()]
}
​