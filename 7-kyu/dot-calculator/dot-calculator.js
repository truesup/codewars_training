function dotCalculator(equation) {
  let [a, op, b] = equation.split(' ');
  let x = a.length, y = b.length;
  let r = 0;
  if (op === '+') r = x + y;
  if (op === '-') r = x - y;
  if (op === '*') r = x * y;
  if (op === '//') r = Math.floor(x / y);
  return '.'.repeat(r);
}
​