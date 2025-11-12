function numberJoy(n) {
  const sum = [...String(n)].reduce((acc, d) => acc + +d, 0);
  const reversed = +String(sum).split('').reverse().join('');
  return sum * reversed === n;
}
​