function isValidIP(str) {
  const parts = str.split('.');
  if (parts.length !== 4) return false;
​
  return parts.every(part => {
    if (!/^\d+$/.test(part)) return false;
    if (part.length > 1 && part.startsWith('0')) return false;
    const num = Number(part);
    return num >= 0 && num <= 255;
  });
}