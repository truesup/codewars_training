function listToArray(list) {
  const result = []
  while (list) {
    result.push(list.value)
    list = list.next
  }
  return result
}
​