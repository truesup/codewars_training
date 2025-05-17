export function rentalCarCost(d: number): number {
  const dailyRate = 40;
  let total = d * dailyRate;
​
  if (d >= 7) {
    total -= 50;
  } else if (d >= 3) {
    total -= 20;
  }
​
  return total;
}