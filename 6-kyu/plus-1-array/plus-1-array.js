function upArray(arr){
  if (!arr.length || arr.some(x => x < 0 || x > 9)) return null;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++;
      return arr;
    }
    arr[i] = 0;
  }
  arr.unshift(1);
  return arr;
}
​