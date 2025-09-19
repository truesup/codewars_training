function stringMerge(string1, string2, letter){
  const i1 = string1.indexOf(letter);
  const i2 = string2.indexOf(letter);
  return string1.slice(0, i1) + string2.slice(i2);
}
​