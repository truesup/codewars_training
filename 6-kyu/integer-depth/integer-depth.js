function computeDepth(x){
  let digits = new Set(), i = 0;
  while (digits.size < 10) {
    i++;
    (x * i).toString().split('').forEach(d => digits.add(d));
  }
  return i;
}
​