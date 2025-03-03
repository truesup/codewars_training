function points(games) {
  let finalScore = 0
  
  games.forEach(game => {
    let ourScore = Number(game[0])
    let theirScore = Number(game[2])
    
    ourScore > theirScore ? finalScore += 3 : ourScore === theirScore ? finalScore += 1 : 0
  })
  
  return finalScore
}