function maxTriSum(numbers){
  let uniqueNums = [...new Set(numbers)];
  uniqueNums.sort((a, b) => b - a);
  return uniqueNums.slice(0, 3).reduce((sum, num) => sum + num, 0);
}