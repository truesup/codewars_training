function isSortedAndHow(array) {
  const ascending = [...array].sort((a, b) => a - b);
  const descending = [...array].sort((a, b) => b - a);
​
  if (array.every((val, i) => val === ascending[i])) {
    return 'yes, ascending';
  } else if (array.every((val, i) => val === descending[i])) {
    return 'yes, descending';
  } else {
    return 'no';
  }
}