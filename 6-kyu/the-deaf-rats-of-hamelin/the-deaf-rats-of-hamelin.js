var countDeafRats = function(town) {
  town = town.replace(/\s+/g, '');
  
  const pIndex = town.indexOf('P');
​
  let deaf = 0;
  
  for (let i = 0; i < pIndex; i += 2) {
    const rat = town.slice(i, i + 2);
    if (rat === 'O~') deaf++;
  }
​
  for (let i = pIndex + 1; i < town.length; i += 2) {
    const rat = town.slice(i, i + 2);
    if (rat === '~O') deaf++;
  }
​
  return deaf;
}
​