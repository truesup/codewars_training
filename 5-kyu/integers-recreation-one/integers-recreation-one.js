function listSquared(m, n) {
  const result = [];
​
  for (let num = m; num <= n; num++) {
    let sumSquares = 0;
    const sqrtNum = Math.floor(Math.sqrt(num));
​
    for (let i = 1; i <= sqrtNum; i++) {
      if (num % i === 0) {
        sumSquares += i * i;
        const otherDiv = num / i;
        if (otherDiv !== i) {
          sumSquares += otherDiv * otherDiv;
        }
      }
    }
​
    const root = Math.sqrt(sumSquares);
    if (root === Math.floor(root)) {
      result.push([num, sumSquares]);
    }
  }
​
  return result;
}