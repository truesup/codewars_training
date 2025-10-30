function nextItem(xs, item) {
  let found = false;
  for (let x of xs) {
    if (found) return x;
    if (x === item) found = true;
  }
}
​