function evenOrOdd(str) {
  let even = 0, odd = 0;
  for (let d of str) {
    d = +d;
    d % 2 === 0 ? even += d : odd += d;
  }
  return even > odd ? "Even is greater than Odd" : odd > even ? "Odd is greater than Even" : "Even and Odd are the same";
}
​