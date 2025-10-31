function sumNoDuplicates(numList) {
  return numList.filter(n => numList.indexOf(n) === numList.lastIndexOf(n)).reduce((a, b) => a + b, 0);
}
​