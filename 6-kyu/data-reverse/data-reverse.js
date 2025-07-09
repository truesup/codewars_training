function dataReverse(data) {
  const result = [];
  for (let i = 0; i < data.length; i += 8) {
    result.unshift(...data.slice(i, i + 8));
  }
  return result;
}