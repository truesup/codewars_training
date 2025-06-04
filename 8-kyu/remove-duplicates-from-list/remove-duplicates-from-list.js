function distinct(a) {
  return a.filter((num, index) => a.indexOf(num) === index);
}