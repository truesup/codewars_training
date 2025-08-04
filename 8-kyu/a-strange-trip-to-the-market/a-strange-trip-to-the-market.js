function isLochNessMonster(s) {
  const lower = s.toLowerCase();
  return (
    lower.includes("tree fiddy") ||
    lower.includes("3.50") ||
    lower.includes("three fifty")
  );
}