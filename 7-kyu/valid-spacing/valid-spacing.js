function validSpacing(s) {
  if (s === "") return true;
  if (s.startsWith(" ") || s.endsWith(" ")) return false;
  return !s.includes("  ");
}
​