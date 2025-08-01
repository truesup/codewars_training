function streetFighterSelection(fighters, position, moves) {
  let [row, col] = position;
  const result = [];
​
  for (let move of moves) {
    switch (move) {
      case 'up':
        row = row === 0 ? 0 : 0;
        break;
      case 'down':
        row = row === 1 ? 1 : 1;
        break;
      case 'left':
        col = (col - 1 + fighters[0].length) % fighters[0].length;
        break;
      case 'right':
        col = (col + 1) % fighters[0].length;
        break;
    }
​
    result.push(fighters[row][col]);
  }
​
  return result;
}