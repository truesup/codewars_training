function well(x) {
  const all = x.flat();
​
  const goodCount = all.reduce((count, val) => {
    return typeof val === 'string' && val.toLowerCase() === 'good'
      ? count + 1
      : count;
  }, 0);
​
  if (goodCount === 0) return 'Fail!';
  if (goodCount <= 2) return 'Publish!';
  return 'I smell a series!';
}
​