function differenceOfSquares(n) {
  const sum = (n * (n + 1)) / 2;
  const squareOfSum = sum * sum;
  const sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
  return squareOfSum - sumOfSquares;
}
​