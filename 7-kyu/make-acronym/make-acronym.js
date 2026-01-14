function toAcronym(inp){
  return inp.split(' ').map(w => w[0].toUpperCase()).join('')
}
​