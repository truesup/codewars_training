function array(string) {
  const arr = string.split(',');
  if (arr.length <= 2) return null;
  return arr.slice(1, -1).join(' ');
}