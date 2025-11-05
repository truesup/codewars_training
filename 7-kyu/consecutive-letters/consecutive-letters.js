function solve(s){
  const sorted = [...s].sort();
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].charCodeAt(0) !== sorted[i-1].charCodeAt(0) + 1) return false;
  }
  return new Set(s).size === s.length;
}
​