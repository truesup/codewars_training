function looseChange(cents){
  cents = Math.floor(cents);
  if (cents <= 0) return {Nickels:0, Pennies:0, Dimes:0, Quarters:0};
  
  let quarters = Math.floor(cents / 25);
  cents %= 25;
  let dimes = Math.floor(cents / 10);
  cents %= 10;
  let nickels = Math.floor(cents / 5);
  cents %= 5;
  let pennies = cents;
  
  return {Nickels:nickels, Pennies:pennies, Dimes:dimes, Quarters:quarters};
}
​