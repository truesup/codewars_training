function multipleOfIndex(array) {
  return array.filter((num, i) => i === 0 ? num === 0 : num % i === 0);
}