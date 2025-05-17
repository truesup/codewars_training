export function countPositivesSumNegatives(input: number[] | null): number[] {
  if (!input || input.length === 0) return [];
​
  let positiveCount = 0;
  let negativeSum = 0;
​
  for (const num of input) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeSum += num;
    }
  }
​
  return [positiveCount, negativeSum];
}