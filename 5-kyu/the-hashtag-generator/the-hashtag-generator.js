function generateHashtag (str) {
  const words = str.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const result = '#' + words.join('');
  return result.length > 1 && result.length <= 140 ? result : false;
}