function filterHomogenous(arrays){
  return arrays.filter(a => a.length && a.every(x => typeof x === typeof a[0]));
}
​