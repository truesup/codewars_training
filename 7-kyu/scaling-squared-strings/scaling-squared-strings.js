function scale(strng, k, n) {
  if (!strng) return "";
  return strng
    .split("\n")
    .map(line => line.split("").map(ch => ch.repeat(k)).join(""))
    .map(line => Array(n).fill(line).join("\n"))
    .join("\n");
}
​