function makePassword(phrase) {
  return phrase
    .split(" ")
    .map(word => word[0])
    .join("")
    .replace(/[iI]/g, "1")
    .replace(/[oO]/g, "0")
    .replace(/[sS]/g, "5");
}
​