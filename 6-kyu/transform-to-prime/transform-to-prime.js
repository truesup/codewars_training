function minimumNumber(numbers){
  let sum = numbers.reduce((a,b)=>a+b,0)
​
  const isPrime = n => {
    if (n < 2) return false
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false
    }
    return true
  }
​
  let add = 0
  while (!isPrime(sum + add)) add++
  return add
}
​