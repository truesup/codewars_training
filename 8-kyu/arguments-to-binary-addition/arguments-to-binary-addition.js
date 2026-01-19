function arr2bin(arr){
  const sum = arr.reduce((s, v) => s + (typeof v === 'number' ? v : 0), 0)
  return Number.isNaN(sum) ? 'NaN' : sum.toString(2)
}
​