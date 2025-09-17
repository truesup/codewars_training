function longestWord(stringOfWords) {
  return stringOfWords.split(' ').reduce((a, b) => b.length >= a.length ? b : a);
}
​