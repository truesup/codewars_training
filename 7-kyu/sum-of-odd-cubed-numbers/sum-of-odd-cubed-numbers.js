function cubeOdd(arr) {
  if (!arr.every(n => typeof n === 'number')) return undefined;
​
  return arr
    .map(n => n ** 3)
    .filter(cube => cube % 2 !== 0)
    .reduce((sum, val) => sum + val, 0);
}