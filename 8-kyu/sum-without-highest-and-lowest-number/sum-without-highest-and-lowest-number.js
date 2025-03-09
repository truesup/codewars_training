function sumArray(arr) {
  if (Array.isArray(arr) && arr.length) {
    const sortedArr = arr.sort((a, b) => a - b)
    const splicedFirst = sortedArr.splice(0, 1)
    const splicedLast = sortedArr.splice(sortedArr.length - 1, 1)
    return sortedArr.reduce((sum, el) => sum + el, 0)
  } else {
    return 0
  }
}