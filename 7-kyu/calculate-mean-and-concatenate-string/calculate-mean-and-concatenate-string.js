function mean(lst){
  const nums = lst.filter(x => !isNaN(x)).map(Number);
  const chars = lst.filter(x => isNaN(x)).join('');
  return [nums.reduce((a,b)=>a+b,0)/nums.length, chars];
}
​