function freqSeq(str, sep) {
  return str.split('').map(c => str.split(c).length - 1).join(sep);
}
​