function nextHappyYear(year){
  while (true) {
    year++;
    let digits = String(year).split('');
    if (new Set(digits).size === digits.length) return year;
  }
}
​