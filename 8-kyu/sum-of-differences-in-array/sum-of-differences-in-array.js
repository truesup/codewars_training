function sumOfDifferences(arr) {
  if (arr.length < 2) return 0;
  arr.sort((a, b) => b - a);
  return arr.reduce((sum, val, i) => i < arr.length - 1 ? sum + (val - arr[i + 1]) : sum, 0);
}