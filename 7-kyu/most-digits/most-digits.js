function findLongest(array){
  return array.reduce((longest, current) => {
    return String(current).length > String(longest).length ? current : longest;
  });
}