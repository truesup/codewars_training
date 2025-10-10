function consonantCount(str) {
  return (str.match(/[^aeiou\W\d_]/gi) || []).length
}
​