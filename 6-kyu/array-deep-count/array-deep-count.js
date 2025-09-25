function deepCount(a){
  return a.reduce((count, el) => count + 1 + (Array.isArray(el) ? deepCount(el) : 0), 0);
}
​