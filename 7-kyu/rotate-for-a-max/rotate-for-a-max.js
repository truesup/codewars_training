function maxRot(n) {
  let str = n.toString();
  let max = n;
​
  for (let i = 0; i < str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    let num = parseInt(str, 10);
    if (num > max) max = num;
  }
​
  return max;
}