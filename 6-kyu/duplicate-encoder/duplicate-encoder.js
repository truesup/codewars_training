function duplicateEncode(word) {
  const lowerWord = word.toLowerCase();
  
  return [...lowerWord]
    .map(char => lowerWord.indexOf(char) === lowerWord.lastIndexOf(char) ? '(' : ')')
    .join('');
}