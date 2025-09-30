var paintLetterboxes = function(start, end) {
  let result = Array(10).fill(0);
​
  for (let i = start; i <= end; i++) {
    for (let digit of i.toString()) {
      result[+digit]++;
    }
  }
​
  return result;
};
​