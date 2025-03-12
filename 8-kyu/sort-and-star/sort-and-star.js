function twoSort(s) {
  const firstOfSorted = s.sort()[0].split('')
  
  for (let i = 1; i < firstOfSorted.length; i++) {
    firstOfSorted[i] = `***${firstOfSorted[i]}`
  }
  
  return firstOfSorted.join('')
}