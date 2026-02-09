function processData(data){
  return data.reduce((acc, [a, b]) => acc * (a - b), 1)
}
​