function ghostBusters(building) {
  const res = building.replace(/\s+/g, '');
  return res === building ? "You just wanted my autograph didn't you?" : res;
}
​