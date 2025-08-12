function balancedNum(number) {
  let digits = String(number).split('').map(Number);
  let len = digits.length;
  
  if (len <= 2) return "Balanced";
  
  let mid = Math.floor(len / 2);
  
  let leftSum, rightSum;
  
  if (len % 2 === 0) {
    leftSum = digits.slice(0, mid - 1).reduce((a, b) => a + b, 0);
    rightSum = digits.slice(mid + 1).reduce((a, b) => a + b, 0);
  } else {
    leftSum = digits.slice(0, mid).reduce((a, b) => a + b, 0);
    rightSum = digits.slice(mid + 1).reduce((a, b) => a + b, 0);
  }
  
  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}