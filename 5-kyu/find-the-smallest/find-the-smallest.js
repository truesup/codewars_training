function smallest(n) {
  let s = n.toString();
  let res = [n, 0, 0];
  for (let i = 0; i < s.length; i++) {
    let removed = s[i];
    let rest = s.slice(0, i) + s.slice(i + 1);
    for (let j = 0; j <= rest.length; j++) {
      let num = +(rest.slice(0, j) + removed + rest.slice(j));
      if (num < res[0] || (num === res[0] && (i < res[1] || (i === res[1] && j < res[2])))) {
        res = [num, i, j];
      }
    }
  }
  return res;
}
​