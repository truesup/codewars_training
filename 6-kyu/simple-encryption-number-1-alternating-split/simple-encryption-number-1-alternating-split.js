function encrypt(text, n) {
  if (!text || n <= 0) return text; 
​
  let result = text;
  for (let i = 0; i < n; i++) {
    let oddChars = "";
    let evenChars = "";
​
    for (let j = 0; j < result.length; j++) {
      if (j % 2 === 1) {
        oddChars += result[j]; 
      } else {
        evenChars += result[j]; 
      }
    }
    result = oddChars + evenChars;
  }
  return result;
}
​
​
function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText; 
​
  let result = encryptedText;
  for (let i = 0; i < n; i++) {
    const len = result.length;
    const half = Math.floor(len / 2);
    let oddChars = result.slice(0, half);
    let evenChars = result.slice(half);
    let decrypted = "";
    for (let j = 0; j < len; j++) {
      if (j % 2 === 0) {
        decrypted += evenChars[Math.floor(j / 2)] || "";
      } else {
        decrypted += oddChars[Math.floor(j / 2)] || "";
      }
    }
    result = decrypted;
  }
  return result;
}