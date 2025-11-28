function explode(x){
  const a = typeof x[0] === 'number' ? x[0] : 0;
  const b = typeof x[1] === 'number' ? x[1] : 0;
  const validA = typeof x[0] === 'number';
  const validB = typeof x[1] === 'number';
  if (!validA && !validB) return 'Void!';
  const score = a + b;
  return Array.from({ length: score }, () => x.slice());
}
​