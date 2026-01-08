const sumSquareEvenRootOdd = ns =>
  +ns.reduce((a, n) => a + (n % 2 === 0 ? n**2 : Math.sqrt(n)), 0).toFixed(2);
​