function nameInStr(str, name){
  str = str.toLowerCase()
  name = name.toLowerCase()
  let i = 0
  for (const c of str) {
    if (c === name[i]) i++
    if (i === name.length) return true
  }
  return false
}
​