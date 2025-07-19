function solve(arr) {
  return arr.map(word => {
    return word
      .toLowerCase()
      .split('')
      .filter((char, idx) => char.charCodeAt(0) - 96 === idx + 1)
      .length;
  });
}