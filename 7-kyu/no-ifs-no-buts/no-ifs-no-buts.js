function noIfsNoButs(a, b) {
  return `${a} is ${['smaller than', 'equal to', 'greater than'][Math.sign(a - b) + 1]} ${b}`
}
​