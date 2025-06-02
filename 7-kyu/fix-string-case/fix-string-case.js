function solve(s){
  const lower = s.split('').filter(c => c === c.toLowerCase()).length;
  const upper = s.length - lower;
  return lower >= upper ? s.toLowerCase() : s.toUpperCase();
}