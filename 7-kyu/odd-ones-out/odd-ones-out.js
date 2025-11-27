function oddOnesOut(nums) {
  const c = {};
  nums.forEach(n => c[n] = (c[n] || 0) + 1);
  return nums.filter(n => c[n] % 2 === 0);
}
​