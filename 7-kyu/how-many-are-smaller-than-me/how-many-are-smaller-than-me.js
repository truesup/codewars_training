function smaller(nums) {
  return nums.map((num, i) => nums.slice(i + 1).filter(n => n < num).length);
}