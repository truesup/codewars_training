function sorter(textbooks) {
  return textbooks.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  )
}
​