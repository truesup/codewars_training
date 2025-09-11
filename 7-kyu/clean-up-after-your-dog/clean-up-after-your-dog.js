function crap(x, bags, cap){
  const flat = x.flat();
  if (flat.includes('D')) return 'Dog!!';
  const crapCount = flat.filter(c => c === '@').length;
  return crapCount <= bags * cap ? 'Clean' : 'Cr@p';
}
​