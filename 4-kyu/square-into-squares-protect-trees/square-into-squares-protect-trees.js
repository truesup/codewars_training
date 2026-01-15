function decompose(n) {
  function dfs(remaining, max) {
    if (remaining === 0) return [];
    for (let i = Math.min(max, Math.floor(Math.sqrt(remaining))); i > 0; i--) {
      const sq = i * i;
      const rest = remaining - sq;
      const res = dfs(rest, i - 1);
      if (res) return [...res, i];
    }
    return null;
  }
  const r = dfs(n * n, n - 1);
  return r;
}
​