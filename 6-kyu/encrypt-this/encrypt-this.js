var encryptThis = function(text) {
  return text.split(' ').map(word => {
    if (word.length === 0) return '';
​
    const firstCharCode = word.charCodeAt(0);
    if (word.length === 1) {
      return firstCharCode.toString();
    } else if (word.length === 2) {
      return firstCharCode + word[1];
    } else {
      // length >= 3
      return firstCharCode + word[word.length - 1] + word.slice(2, word.length - 1) + word[1];
    }
  }).join(' ');
}