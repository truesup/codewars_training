function simplify(poly) {
  const terms = poly.match(/[+-]?\d*[a-z]+/g);
  const map = {};
​
  for (let term of terms) {
    let sign = term[0] === '-' ? -1 : 1;
    term = term.replace(/^[+-]/, '');
​
    const match = term.match(/^(\d*)([a-z]+)$/);
    let coeff = match[1] ? parseInt(match[1]) : 1;
    let vars = match[2].split('').sort().join('');
​
    coeff *= sign;
​
    map[vars] = (map[vars] || 0) + coeff;
  }
​
  const sorted = Object.keys(map)
    .filter(k => map[k] !== 0)
    .sort((a, b) => a.length - b.length || a.localeCompare(b));
​
  let result = '';
  for (let key of sorted) {
    let coeff = map[key];
    if (result === '') {
      result += (coeff === -1 ? '-' : coeff === 1 ? '' : coeff) + key;
    } else {
      result += (coeff > 0 ? '+' : '') + 
                (coeff === 1 || coeff === -1 ? (coeff === -1 ? '-' : '') : coeff) + key;
    }
  }
​
  return result;
}
​