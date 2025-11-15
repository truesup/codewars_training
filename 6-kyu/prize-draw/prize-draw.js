function rank(st, we, n) {
  if (!st) return "No participants";
​
  const names = st.split(',');
  if (n > names.length) return "Not enough participants";
​
  const score = name =>
    name.length +
    name.toLowerCase().split('').reduce((s, c) => s + c.charCodeAt(0) - 96, 0);
​
  const arr = names.map((name, i) => ({
    name,
    win: score(name) * we[i]
  }));
​
  arr.sort((a, b) =>
    b.win === a.win ? a.name.localeCompare(b.name) : b.win - a.win
  );
​
  return arr[n - 1].name;
}
​