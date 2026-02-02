function solve(stones) {
  let removed = 0
​
  for (let i = 1; i < stones.length; i++) {
    if (stones[i] === stones[i - 1]) {
      removed++
    }
  }
​
  return removed
}