function length(head) {
  let c = 0
  while (head) {
    c++
    head = head.next
  }
  return c
}
​