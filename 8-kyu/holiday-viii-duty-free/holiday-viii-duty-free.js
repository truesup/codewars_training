function dutyFree(normPrice, discount, hol){
  const savingsPerBottle = normPrice * (discount / 100);
  return Math.floor(hol / savingsPerBottle);
}