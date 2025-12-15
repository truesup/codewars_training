function arrayLeaders(numbers){
  let res = [];
  let rightSum = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > rightSum) res.push(numbers[i]);
    rightSum += numbers[i];
  }
  return res.reverse();
}
​