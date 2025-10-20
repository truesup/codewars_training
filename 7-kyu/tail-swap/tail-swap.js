function tailSwap(arr) {
  const [a1, b1] = arr[0].split(':');
  const [a2, b2] = arr[1].split(':');
  return [`${a1}:${b2}`, `${a2}:${b1}`];
}
​