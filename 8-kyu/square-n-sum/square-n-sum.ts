export function squareSum(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}