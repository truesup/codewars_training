function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  
  let longest = "";
  
  for (let i = 0; i <= strarr.length - k; i++) {
    const currentStr = strarr.slice(i, i + k).join("");
    
    if (currentStr.length > longest.length) {
      longest = currentStr;
    }
  }
  
  return longest;
}