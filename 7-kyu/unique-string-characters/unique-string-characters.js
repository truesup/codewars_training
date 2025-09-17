function solve(a,b){
  return [...a.split('').filter(ch => !b.includes(ch)), 
          ...b.split('').filter(ch => !a.includes(ch))].join('');
}
​