function howManySmaller(arr,n){
  return arr.map(x => +x.toFixed(2)).filter(x => x < n).length;
}
​