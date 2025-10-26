function gordon(a){
  return a.toUpperCase()
    .replace(/A/g, '@')
    .replace(/[EIOU]/g, '*')
    .split(' ')
    .map(w => w + '!!!!')
    .join(' ');
}
​