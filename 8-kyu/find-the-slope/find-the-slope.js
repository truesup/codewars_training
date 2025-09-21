function slope(points) {
  const [x1, y1, x2, y2] = points;
  const dx = x2 - x1;
  const dy = y2 - y1;
​
  if (dx === 0) return "undefined";
  return String(dy / dx);
}
​