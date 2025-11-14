function uniqueSum(lst){
  if (!lst.length) return null;
  return [...new Set(lst)].reduce((a,b) => a + b, 0);
}
​