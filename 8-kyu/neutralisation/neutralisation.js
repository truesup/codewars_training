function neutralise(s1, s2) {
  return [...s1].map((ch, i) => ch === s2[i] ? ch : '0').join('');
}
​