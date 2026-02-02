function keepOrder(ary, val) {
  let left = 0
  let right = ary.length
​
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
​
    if (ary[mid] < val) {
      left = mid + 1
    } else {
      right = mid
    }
  }
​
  return left
}