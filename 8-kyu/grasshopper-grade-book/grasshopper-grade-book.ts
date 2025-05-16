export function getGrade(a: number, b: number, c: number): string {
  const midValue: number = (a + b + c) / 3
  
  if (midValue >= 90) return 'A'
  if (midValue >= 80) return 'B'
  if (midValue >= 70) return 'C'
  if (midValue >= 60) return 'D'
  else return 'F'
}