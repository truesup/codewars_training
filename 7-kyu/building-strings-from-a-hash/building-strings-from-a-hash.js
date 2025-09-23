function solution(pairs){
  return Object.entries(pairs).map(([k,v]) => `${k} = ${v}`).join(',');
}
​