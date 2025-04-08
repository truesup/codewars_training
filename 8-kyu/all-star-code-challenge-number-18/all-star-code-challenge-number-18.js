function strCount(str, letter){  
  let count = 0
  
  for (const l of str) {
    if (l === letter) count += 1
  }
  
  return count
}