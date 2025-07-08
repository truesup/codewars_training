function XO(str) {
  str = str.toLowerCase();
  const xCount = [...str].filter(c => c === 'x').length;
  const oCount = [...str].filter(c => c === 'o').length;
  return xCount === oCount;
}