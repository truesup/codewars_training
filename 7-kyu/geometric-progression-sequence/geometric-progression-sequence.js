function geometricSequenceElements(a, r, n){
  return Array.from({length:n},(_,i)=>a*r**i).join(', ');
}
​