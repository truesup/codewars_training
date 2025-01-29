function cookie(x){
  let result;
  
  if (typeof x === 'string') {
    result = 'Zach'; 
  } else if (typeof x === 'number') {
    result = 'Monica';
  } else {
    result = 'the dog';
  }
  
  const finalString = `Who ate the last cookie? It was ${result}!`;
  return finalString;
}