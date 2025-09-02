function capitalize(string, indices) {
  let chars = string.split(""); 
  indices.forEach(i => {
    if (i >= 0 && i < chars.length) {
      chars[i] = chars[i].toUpperCase();
    }
  });
  return chars.join("");
}
​