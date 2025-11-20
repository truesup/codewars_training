function reverse(n){
  let rev = 0
  while (n > 0) {
    rev = rev * 10 + (n % 10)
    n = (n / 10) | 0
  }
  return rev
}
​