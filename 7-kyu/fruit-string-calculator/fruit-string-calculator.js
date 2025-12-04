function calculate(string) {
  const [a, op, b] = string.match(/\d+|gains|loses/g);
  return op === 'gains'
    ? Number(a) + Number(b)
    : Number(a) - Number(b);
}
​