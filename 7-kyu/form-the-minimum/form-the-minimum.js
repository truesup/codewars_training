function minValue(values){
  return parseInt([...new Set(values)].sort((a, b) => a - b).join(''));
}