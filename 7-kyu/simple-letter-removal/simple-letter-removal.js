function solve(s, k){
  const arr = s.split('')
  for(let ch=97; ch<=122 && k>0; ch++){
    for(let i=0; i<arr.length && k>0; i++){
      if(arr[i] === String.fromCharCode(ch)){
        arr[i] = ''
        k--
      }
    }
  }
  return arr.join('')
}
​