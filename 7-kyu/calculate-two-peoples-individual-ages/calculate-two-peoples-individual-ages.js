function getAges(sum, difference) {
  if (sum < 0 || difference < 0) return null;
  let older = (sum + difference) / 2;
  let younger = (sum - difference) / 2;
  return (older < 0 || younger < 0) ? null : [older, younger];
}
​