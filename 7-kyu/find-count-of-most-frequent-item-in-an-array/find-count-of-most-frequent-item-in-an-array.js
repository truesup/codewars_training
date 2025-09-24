function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;
​
  const freq = {};
​
  for (let num of collection) {
    freq[num] = (freq[num] || 0) + 1;
  }
​
  return Math.max(...Object.values(freq));
}
​