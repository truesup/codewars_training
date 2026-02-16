function capitalsFirst(str){
  const words = str.split(" ");
  const upper = [];
  const lower = [];
  
  for (let w of words) {
    if (!/^[a-zA-Z]/.test(w)) continue;
    if (/^[A-Z]/.test(w)) upper.push(w);
    else lower.push(w);
  }
  
  return [...upper, ...lower].join(" ");
}
​