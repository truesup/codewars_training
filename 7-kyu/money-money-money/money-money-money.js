function calculateYears(principal, interest, tax, desired) {
  let years = 0;
​
  while (principal < desired) {
    let profit = principal * interest;
    let taxedProfit = profit * (1 - tax);
    principal += taxedProfit;
    years++;
  }
​
  return years;
}