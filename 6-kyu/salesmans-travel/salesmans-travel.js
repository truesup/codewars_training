function travel(r, zipcode) {
  if (!zipcode) return ":/";
  const addresses = r.split(",");
  const filtered = addresses.filter(a => a.endsWith(zipcode));
  if (!filtered.length) return `${zipcode}:/`;
  const streets = filtered.map(a => a.replace(/^(\d+)\s/, '').replace(zipcode, '').trim());
  const nums = filtered.map(a => a.match(/^(\d+)/)[1]);
  return `${zipcode}:${streets.join(',')}/${nums.join(',')}`;
}
​