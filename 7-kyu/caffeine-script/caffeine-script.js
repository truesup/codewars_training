function caffeineBuzz(n){
  let res = "";
​
  if (n % 12 === 0) {
    res = "Coffee";
  } else if (n % 3 === 0) {
    res = "Java";
  } else {
    return "mocha_missing!";
  }
​
  if (n % 2 === 0) res += "Script";
  
  return res;
}
​