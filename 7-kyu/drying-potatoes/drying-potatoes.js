function potatoes(p0, w0, p1) {
  let dry = w0 * (100 - p0) / 100;
  return Math.floor(dry * 100 / (100 - p1));
}
​