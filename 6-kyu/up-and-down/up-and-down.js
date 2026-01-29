function arrange(strng) {
  let a = strng.split(' ');
  for (let i = 0; i < a.length - 1; i++) {
    if (
      (i % 2 === 0 && a[i].length > a[i + 1].length) ||
      (i % 2 === 1 && a[i].length < a[i + 1].length)
    ) {
      [a[i], a[i + 1]] = [a[i + 1], a[i]];
      i = Math.max(-1, i - 2);
    }
  }
  return a
    .map((w, i) => (i % 2 === 0 ? w.toLowerCase() : w.toUpperCase()))
    .join(' ');
}
​