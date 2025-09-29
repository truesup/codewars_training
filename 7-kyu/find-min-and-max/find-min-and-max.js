function getMinMax(arr) {
  if (!arr || arr.length === 0) return [];
  return [Math.min(...arr), Math.max(...arr)];
}
​