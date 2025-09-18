function lastSurvivor(letters, coords) {
  let arr = letters.split('');
  for (let i of coords) {
    arr.splice(i, 1);
  }
  return arr[0];
}
​