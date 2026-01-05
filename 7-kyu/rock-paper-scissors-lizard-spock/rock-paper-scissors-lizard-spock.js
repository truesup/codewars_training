function rpsls(pl1, pl2) {
  if (pl1 === pl2) return "Draw!"
​
  const wins = {
    rock: ["lizard", "scissors"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]
  }
​
  return wins[pl1].includes(pl2) ? "Player 1 Won!" : "Player 2 Won!"
}
​