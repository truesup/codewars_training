function lostSheep(friday, saturday, total) {
  const fridayCount = friday.reduce((a, b) => a + b, 0);
  const saturdayCount = saturday.reduce((a, b) => a + b, 0);
  return total - (fridayCount + saturdayCount);
}
​