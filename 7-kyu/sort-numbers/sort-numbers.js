function solution(nums) {
  return Array.isArray(nums) ? nums.sort((a, b) => a - b) : [];
}