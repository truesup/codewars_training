function vowelOne(s){
  return s.replace(/./g, c => /[aeiouAEIOU]/.test(c) ? "1" : "0");
}
​