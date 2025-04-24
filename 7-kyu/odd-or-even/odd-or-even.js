function oddOrEven(array) {
  const sum = array.reduce((sum, el) => sum + el, 0)
  
  return sum % 2 === 0 ? "even" : 'odd'
}