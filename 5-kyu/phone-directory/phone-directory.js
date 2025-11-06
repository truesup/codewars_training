function phone(strng, num) {
  const lines = strng.split('\n').filter(Boolean);
  const matches = lines.filter(l => l.includes(num));
​
  if (matches.length > 1) return `Error => Too many people: ${num}`;
  if (matches.length === 0) return `Error => Not found: ${num}`;
​
  let line = matches[0];
​
  const name = (line.match(/<([^>]+)>/) || [,''])[1];
​
  line = line.replace(/<[^>]+>/, '');
  line = line.replace(num, '');
  line = line.replace(/[^A-Za-z0-9.\- ]/g, ' ');
  line = line.replace(/\s+/g, ' ').trim();
​
  return `Phone => ${num}, Name => ${name}, Address => ${line}`;
}
​