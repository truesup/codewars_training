function menFromBoys(arr){
  let unique = [...new Set(arr)];
  let evens = unique.filter(x => x % 2 === 0).sort((a,b) => a - b);
  let odds = unique.filter(x => x % 2 !== 0).sort((a,b) => b - a);
  return [...evens, ...odds];
}
​