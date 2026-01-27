function total(arr){
  const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
​
  return arr.reduce((sum, val, idx) => 
    isPrime(idx) ? sum + val : sum, 0);
}
​