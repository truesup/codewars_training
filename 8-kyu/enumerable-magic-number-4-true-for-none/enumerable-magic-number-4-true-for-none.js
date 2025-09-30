function none(arr, fun) {
  return arr.every(el => !fun(el));
}
​