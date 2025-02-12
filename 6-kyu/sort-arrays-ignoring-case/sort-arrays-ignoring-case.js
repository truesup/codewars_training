function sortme(names) {
  return names.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
}
​