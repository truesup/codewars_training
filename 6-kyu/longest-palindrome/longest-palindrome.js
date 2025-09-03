function longestPalindrome(s) {
  if (s.length === 0) return 0;
​
  let maxLen = 1;
​
  const expandFromCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };
​
  for (let i = 0; i < s.length; i++) {
    let oddLen = expandFromCenter(i, i);       
    let evenLen = expandFromCenter(i, i + 1);  
    maxLen = Math.max(maxLen, oddLen, evenLen);
  }
​
  return maxLen;
}
​