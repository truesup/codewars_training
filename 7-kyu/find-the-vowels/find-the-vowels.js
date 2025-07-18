function vowelIndices(word){
  const vowels = 'aeiouyAEIOUY';
  return word
    .split('')
    .map((char, index) => vowels.includes(char) ? index + 1 : null)
    .filter(index => index !== null);
}