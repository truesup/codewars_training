function productArray(numbers){
  const totalProduct = numbers.reduce((acc, num) => acc * num, 1);
  return numbers.map(num => totalProduct / num);
}
​