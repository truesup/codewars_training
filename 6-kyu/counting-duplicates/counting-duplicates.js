function duplicateCount(text){
  text = text.toLowerCase();
  const count = {};
  const duplicates = new Set();
  
  for (let char of text) {
    count[char] = (count[char] || 0) + 1;
    
    if (count[char] === 2) {
      duplicates.add(char);
    }
  }
  
  return duplicates.size;
}