function interleave(...arrays) {
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  const result = [];
​
  for (let i = 0; i < maxLength; i++) {
    for (let arr of arrays) {
      result.push(i < arr.length ? arr[i] : null);
    }
  }
​
  return result;
}