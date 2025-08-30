function sumOfN(n) {
  let result = [];
  for (let i = 0; i <= Math.abs(n); i++) {
    let term = (i * (i + 1)) / 2;
    result.push(n < 0 ? -term : term);
  }
  return result;
}
​