function isNice(arr){
  if (!arr.length) return false;
  return arr.every(n => arr.includes(n - 1) || arr.includes(n + 1));
}
​