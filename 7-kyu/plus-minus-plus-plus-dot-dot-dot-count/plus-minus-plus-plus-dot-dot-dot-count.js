function catchSignChange(arr) {
  if (arr.length === 0) return 0
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i - 1] >= 0 && arr[i] < 0) || (arr[i - 1] < 0 && arr[i] >= 0)) {
      count++
    }
  }
  return count
}
​