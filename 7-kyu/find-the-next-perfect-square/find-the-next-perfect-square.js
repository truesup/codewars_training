function findNextSquare(sq) {
  const sqrtSq = Math.sqrt(sq);
  if (sqrtSq !== Math.floor(sqrtSq)) {
    return -1;
  }
  return Math.pow(sqrtSq + 1, 2);
}