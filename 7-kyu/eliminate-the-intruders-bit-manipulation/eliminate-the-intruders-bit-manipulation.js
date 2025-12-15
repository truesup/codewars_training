function eliminateUnsetBits(number) {
  const ones = number.replace(/0/g, '');
  return ones ? parseInt(ones, 2) : 0;
}
​