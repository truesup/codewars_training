function testResult(array) {
  let sum = 0
  const result = { h: 0, a: 0, l: 0 }
​
  for (const mark of array) {
    sum += mark
​
    if (mark >= 9) {
      result.h++
    } else if (mark >= 7) {
      result.a++
    } else {
      result.l++
    }
  }
​
  const average = Math.round((sum / array.length) * 1000) / 1000
​
  if (result.a === 0 && result.l === 0) {
    return [average, result, "They did well"]
  }
​
  return [average, result]
}
​