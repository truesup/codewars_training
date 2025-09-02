function solve(s) {
  let vowels = "aeiou";
  let maxLen = 0;
  let currentLen = 0;
  
  for (let char of s) {
    if (vowels.includes(char)) {
      currentLen++;
      maxLen = Math.max(maxLen, currentLen);
    } else {
      currentLen = 0;
    }
  }
  
  return maxLen;
}
​