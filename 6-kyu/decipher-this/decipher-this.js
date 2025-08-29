function decipherThis(str) {
  return str.split(' ').map(word => {
    let code = parseInt(word.match(/^\d+/)[0]);
    let firstChar = String.fromCharCode(code);
    let rest = word.replace(/^\d+/, '').split('');
    if (rest.length > 1) {
      [rest[0], rest[rest.length - 1]] = [rest[rest.length - 1], rest[0]];
    }
    return firstChar + rest.join('');
  }).join(' ');
}
​