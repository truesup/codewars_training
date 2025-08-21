function disariumNumber(n){
  let digits = String(n).split('').map(Number)
  let sum = digits.reduce((acc, d, i) => acc + Math.pow(d, i + 1), 0)
  return sum === n ? "Disarium !!" : "Not !!"
}
​