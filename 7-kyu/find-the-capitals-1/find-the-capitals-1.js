var capitals = function (word) {
  const resultArr = [];
  
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      resultArr.push(i);
    }
  }
  
  return resultArr;
};