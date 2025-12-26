function pattern(n){
  return Array.from({ length: n }, (_, i) =>
    i === 0 ? '1' : `1${'*'.repeat(i)}${i + 1}`
  ).join('\n');
}
​