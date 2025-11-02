function bingo(a) {
  const bingoSet = new Set([2, 9, 14, 7, 15]);
  return [...bingoSet].every(num => a.includes(num)) ? "WIN" : "LOSE";
}
​