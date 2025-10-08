function wordValue(a) {
  return a.map((str, i) =>
    str.replace(/ /g, '')
       .split('')
       .reduce((sum, ch) => sum + ch.charCodeAt(0) - 96, 0) * (i + 1)
  )
}
​