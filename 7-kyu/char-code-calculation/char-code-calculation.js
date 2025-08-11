function calc(x) {
  let total1 = '';
  
  for (let char of x) {
    total1 += char.charCodeAt(0);
  }
  
  let total2 = total1.replace(/7/g, '1');
​
  const sumDigits = str => [...str].reduce((sum, d) => sum + Number(d), 0);
​
  return sumDigits(total1) - sumDigits(total2);
}