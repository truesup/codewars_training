function titleCase(title, minorWords) {
  if (!title) return ''; 
​
  const minorWordsArr = minorWords ? minorWords.toLowerCase().split(' ') : [];
​
  return title
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0 || !minorWordsArr.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    })
    .join(' ');
}