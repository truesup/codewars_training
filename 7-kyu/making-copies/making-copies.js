function copyList(l) {
  if (!Array.isArray(l)) throw new Error();
  return l.map(x => x);
}
​