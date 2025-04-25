function deleteNth(arr, n) {
  const count = {};
  return arr.filter(x => {
    count[x] = (count[x] || 0) + 1;
    return count[x] <= n;
  });
}