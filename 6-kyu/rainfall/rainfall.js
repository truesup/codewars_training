function mean(town, strng) {
  let regex = new RegExp("^" + town + ":(.*)$", "m");
  let match = strng.match(regex);
  if (!match) return -1;
​
  let values = match[1]
    .split(",")
    .map(s => parseFloat(s.trim().split(" ")[1]));
​
  return values.reduce((a, b) => a + b, 0) / values.length;
}
​
function variance(town, strng) {
  let regex = new RegExp("^" + town + ":(.*)$", "m");
  let match = strng.match(regex);
  if (!match) return -1;
​
  let values = match[1]
    .split(",")
    .map(s => parseFloat(s.trim().split(" ")[1]));
​
  let avg = mean(town, strng);
  return values.reduce((sum, x) => sum + Math.pow(x - avg, 2), 0) / values.length;
}
​