function numPrimorial(n){
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  let count = 0, num = 2, result = 1;
  while (count < n) {
    if (isPrime(num)) {
      result *= num;
      count++;
    }
    num++;
  }
  return result;
}
​