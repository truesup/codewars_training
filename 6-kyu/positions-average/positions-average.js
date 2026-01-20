function posAverage(s) {
  const arr = s.split(', ').map(x => x.trim())
  let total = 0, matches = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      total += arr[i].length
      for (let k = 0; k < arr[i].length; k++) {
        if (arr[i][k] === arr[j][k]) matches++
      }
    }
  }
  return (matches / total * 100).toFixed(10)
}
​