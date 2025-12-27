function sentence(arrayOfObjects) {
  return arrayOfObjects
    .sort((a, b) => Number(Object.keys(a)[0]) - Number(Object.keys(b)[0]))
    .map(obj => Object.values(obj)[0])
    .join(' ');
}
​