function tankvol(h, d, vt) {
  const r = d / 2;
  const l = vt / (Math.PI * r * r);
  const theta = 2 * Math.acos((r - h) / r);
  const segmentArea = (r * r / 2) * (theta - Math.sin(theta));
  return Math.floor(segmentArea * l);
}