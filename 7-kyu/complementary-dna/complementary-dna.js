function dnaStrand(dna){
  const map = {A:'T', T:'A', C:'G', G:'C'};
  return dna.split('').map(c => map[c]).join('');
}
​