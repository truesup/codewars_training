function vampireTest(a, b) {
  const prod = String(a * b).split('').sort().join('');
  const fangs = (String(a) + String(b)).split('').sort().join('');
  return prod === fangs;
}
​