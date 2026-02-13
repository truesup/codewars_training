function cake(x, y) {
  if (x === 0) return "That was close!";
  let total = 0;
  for (let i = 0; i < y.length; i++) {
    if (i % 2 === 0) total += y.charCodeAt(i);
    else total += y.charCodeAt(i) - 96;
  }
  return total > x * 0.7 ? "Fire!" : "That was close!";
}
​