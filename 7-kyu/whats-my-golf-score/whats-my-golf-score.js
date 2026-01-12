function golfScoreCalculator(parList, scoreList){
  let total = 0
  for (let i = 0; i < 18; i++) {
    total += +scoreList[i] - +parList[i]
  }
  return total
}
​