function alternate(n, firstValue, secondValue){
  return Array.from({length: n}, (_, i) => i % 2 === 0 ? firstValue : secondValue)
}
​