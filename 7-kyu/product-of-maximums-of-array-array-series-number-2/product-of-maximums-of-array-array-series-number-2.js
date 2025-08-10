function maxProduct(numbers, size){
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((prod, num) => prod * num, 1)
}