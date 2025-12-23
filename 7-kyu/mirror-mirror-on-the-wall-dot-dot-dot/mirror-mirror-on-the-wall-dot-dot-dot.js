function mirror(data) {
  if (!data.length) return [];
  const s = [...data].sort((a, b) => a - b);
  return s.concat(s.slice(0, -1).reverse());
}
​