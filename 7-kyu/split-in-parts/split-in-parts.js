var splitInParts = function(s, partLength){
  let parts = [];
  
  for (let i = 0; i < s.length; i += partLength) {
    parts.push(s.slice(i, i + partLength));
  }
  
  return parts.join(' ');
};
​