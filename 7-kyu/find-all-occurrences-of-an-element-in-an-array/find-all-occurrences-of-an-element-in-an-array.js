function findAll(array, n) {
  return array.reduce((acc, val, idx) => {
    if (val === n) acc.push(idx);
    return acc;
  }, []);
}
​