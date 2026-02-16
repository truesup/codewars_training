function findAll(sum, count) {
  const results = [];
  
  function dfs(pos, prev, remaining, path) {
    if (pos === count) {
      if (remaining === 0) results.push(path);
      return;
    }
    for (let d = prev; d <= 9; d++) {
      if (remaining - d < 0) break;
      dfs(pos + 1, d, remaining - d, path + d);
    }
  }
  
  dfs(0, 1, sum, "");
  
  if (results.length === 0) return [];
  
  return [results.length, results[0], results[results.length - 1]];
}
​