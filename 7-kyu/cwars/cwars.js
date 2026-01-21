function initials(n){
  const parts = n.split(' ');
  return parts
    .map((p,i)=> i < parts.length-1 ? p[0].toUpperCase() : p[0].toUpperCase()+p.slice(1).toLowerCase())
    .join('.');
}
​