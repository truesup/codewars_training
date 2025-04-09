 function count(board) {
​
  const moves = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]
  ];
​
​
  let startR = -1, startC = -1;
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (board[r][c] === "K") {
        startR = r;
        startC = c;
        break;
      }
    }
    if (startR !== -1) break;
  }
  
​
  if (startR === -1 || startC === -1) return 0;
​
​
  const firstMoves = [];
  for (const [dr, dc] of moves) {
    const newR = startR + dr;
    const newC = startC + dc;