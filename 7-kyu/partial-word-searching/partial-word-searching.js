function wordSearch(query, seq){
  const res = seq.filter(s => s.toLowerCase().includes(query.toLowerCase()));
  return res.length ? res : ["Empty"];
}
​