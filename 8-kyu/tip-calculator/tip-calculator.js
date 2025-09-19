function calculateTip(amount, rating) {
  const rates = {
    terrible: 0,
    poor: 0.05,
    good: 0.10,
    great: 0.15,
    excellent: 0.20
  };
​
  const key = rating.toLowerCase();
  
  if (!(key in rates)) return "Rating not recognised";
​
  return Math.ceil(amount * rates[key]);
}
​