function Node(data) {
  this.data = data;
  this.next = null;
}
​
function length(head) {
  let count = 0;
  let current = head;
​
  while (current !== null) {
    count++;
    current = current.next;
  }
​
  return count;
}
​
function count(head, data) {
  let occurrences = 0;
  let current = head;
​
  while (current !== null) {
    if (current.data === data) {
      occurrences++;
    }
    current = current.next;
  }
​
  return occurrences;
}
​