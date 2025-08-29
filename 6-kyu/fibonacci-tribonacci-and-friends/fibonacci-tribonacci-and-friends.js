function Xbonacci(signature, n){
  let x = signature.length;
  let res = signature.slice(0, n);
  while (res.length < n) {
    res.push(res.slice(-x).reduce((a,b) => a+b, 0));
  }
  return res;
}
​