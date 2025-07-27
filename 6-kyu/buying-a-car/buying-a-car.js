function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  if (startPriceOld >= startPriceNew) {
    return [0, Math.round(startPriceOld - startPriceNew)];
  }
​
  let months = 0;
  let savings = 0;
  let oldPrice = startPriceOld;
  let newPrice = startPriceNew;
  let percentLoss = percentLossByMonth;
​
  while ((oldPrice + savings) < newPrice) {
    months++;
​
    if (months % 2 === 0) {
      percentLoss += 0.5;
    }
​
    oldPrice *= (1 - percentLoss / 100);
    newPrice *= (1 - percentLoss / 100);
​
    savings += savingperMonth;
  }
​
  const leftover = Math.round((oldPrice + savings) - newPrice);
  return [months, leftover];
}