function removeParentheses(s) {
  let result = "";
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") depth++;
    else if (s[i] === ")") depth--;
    else if (depth === 0) result += s[i];
  }
  return result;
}
​