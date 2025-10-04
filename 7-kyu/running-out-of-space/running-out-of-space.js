function spacey(array) {
  return array.map((_, i) => array.slice(0, i + 1).join(''))
}
​