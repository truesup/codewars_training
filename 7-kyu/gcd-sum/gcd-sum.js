function solve(s, g){
  if (s % g !== 0) return -1;
​
  const x = g;
  const y = s - g;
​
  return [x, y];
}
​