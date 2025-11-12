function solution(fullText, search) {
  let count = 0;
  let index = 0;
​
  while ((index = fullText.indexOf(search, index)) !== -1) {
    count++;
    index += search.length;
  }
​
  return count;
}
​