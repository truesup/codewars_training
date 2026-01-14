function reverseByCenter(s){
  const n = s.length
  const mid = Math.floor(n/2)
  return n % 2 === 0
    ? s.slice(mid) + s.slice(0, mid)
    : s.slice(mid+1) + s[mid] + s.slice(0, mid)
}
​