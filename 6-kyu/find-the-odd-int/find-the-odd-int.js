function findOdd(A) {
  const count = {}
  
  for (const num of A) {
    count[num] = (count[num] || 0) + 1
  }
  
  for (const key in count) {
    if (count[key] % 2 !== 0) {
      return +key
    }
  }
  
  return 0
}