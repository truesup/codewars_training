function tripleX(str){
  const i = str.indexOf('x')
  return i !== -1 && str.slice(i, i+3) === 'xxx'
}
​