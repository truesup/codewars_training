function findUniq(arr) {
  let common;
  if (arr[0] === arr[1]) {
    common = arr[0];
  } else if (arr[0] === arr[2]) {
    common = arr[0];
  } else {
    common = arr[1];
  }
  
  for (const num of arr) {
    if (num !== common) return num;
  }
}