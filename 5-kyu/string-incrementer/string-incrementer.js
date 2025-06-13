function incrementString(strng) {
  const match = strng.match(/(\d*)$/); 
  const number = match[0];
  const prefix = strng.slice(0, -number.length);
​
  if (number === '') {
    return strng + '1';
  }
​
  const incremented = (parseInt(number, 10) + 1).toString();
  const leadingZeros = number.length - incremented.length;
​
  return prefix + '0'.repeat(Math.max(0, leadingZeros)) + incremented;
}