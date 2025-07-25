function divCon(x) {
  let sum = 0;
  for (let item of x) {
    if (typeof item === 'number') {
      sum += item;
    } else if (typeof item === 'string') {
      sum -= Number(item);
    }
  }
  return sum;
}