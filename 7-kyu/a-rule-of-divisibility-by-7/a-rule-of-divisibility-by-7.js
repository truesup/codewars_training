function seven(m) {
  let steps = 0;
  while (m > 99) {
    let y = m % 10;
    let x = Math.floor(m / 10);
    m = x - 2 * y;
    steps++;
  }
  return [m, steps];
}
​