function broken(x){
  return x.split('').map(c => c === '1' ? '0' : '1').join('');
}
​