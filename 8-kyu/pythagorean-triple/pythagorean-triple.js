function isPythagoreanTriple(integers) {
  integers.sort((a, b) => a - b);
​
  const [a, b, c] = integers;
  return a * a + b * b === c * c;
}
​