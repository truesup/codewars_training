function high(x) {
  const words = x.split(' ');
​
  // Функция для подсчета "веса" слова
  const wordScore = word =>
    word
      .split('')
      .reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
​
  // Найдем слово с максимальным весом
  let maxScore = 0;
  let maxWord = '';
​
  for (let word of words) {
    const score = wordScore(word);
    if (score > maxScore) {
      maxScore = score;
      maxWord = word;
    }
  }
​
  return maxWord;
}