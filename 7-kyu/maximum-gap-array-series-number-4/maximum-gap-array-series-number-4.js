function maxGap(numbers){
  numbers.sort((a, b) => a - b);
  let max = 0;
  for (let i = 1; i < numbers.length; i++) {
    const diff = numbers[i] - numbers[i - 1];
    if (diff > max) max = diff;
  }
  return max;
}
​