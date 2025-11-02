function rot(strng) {
  return strng.split('\n').map(line => line.split('').reverse().join('')).reverse().join('\n');
}
​
function selfieAndRot(strng) {
  const lines = strng.split('\n');
  const dots = '.'.repeat(lines[0].length);
  const selfie = lines.map(line => line + dots);
  const rotated = rot(strng).split('\n').map(line => dots + line);
  return [...selfie, ...rotated].join('\n');
}
​
function oper(fct, s) {
  return fct(s);
}
​