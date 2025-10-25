function circleArea(radius) {
  if (radius <= 0) throw Error();
  return Math.PI * radius * radius;
}
​