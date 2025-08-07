function squareArea(A){
  const r = (2 * A) / Math.PI;
  const area = r * r;
  return +area.toFixed(2);
}