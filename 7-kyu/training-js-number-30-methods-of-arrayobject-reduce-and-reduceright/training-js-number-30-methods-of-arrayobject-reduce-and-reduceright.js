function tailAndHead(arr) {
  const arrToReduce = [];
  
  for (let i = 0; i < arr.length - 1; i++) { 
    const lastDigit = String(arr[i])[String(arr[i]).length - 1]; 
    const firstDigit = String(arr[i + 1])[0]; 
​
    arrToReduce.push(+lastDigit + +firstDigit);
  }
  
  return arrToReduce.reduce((acc, el) => acc * el, 1);
}