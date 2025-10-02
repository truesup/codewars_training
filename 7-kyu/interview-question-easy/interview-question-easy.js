function getStrings(city){
  city = city.toLowerCase().replace(/[^a-z]/g, '');
  let result = [];
  let seen = new Set();
  for (let ch of city) {
    if (!seen.has(ch)) {
      let count = [...city].filter(c => c === ch).length;
      result.push(`${ch}:${'*'.repeat(count)}`);
      seen.add(ch);
    }
  }
  return result.join(',');
}
​