function save(sizes, hd) {
  let used = 0, count = 0;
  for (let size of sizes) {
    if (used + size <= hd) {
      used += size;
      count++;
    } else if (size === 0) {
      count++;
    } else {
      break;
    }
  }
  return count;
}
​