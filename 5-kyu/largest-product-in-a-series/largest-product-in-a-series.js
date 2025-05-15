function greatestProduct(input) {
  let max = 0;
​
  for (let i = 0; i <= input.length - 5; i++) {
    const slice = input.slice(i, i + 5);
    const product = [...slice].reduce((acc, digit) => acc * Number(digit), 1);
    if (product > max) {
      max = product;
    }
  }
​
  return max;
}