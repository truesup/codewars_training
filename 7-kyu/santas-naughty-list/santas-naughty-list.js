function findChildren(santasList, children){
  return [...new Set(children.filter(c => santasList.includes(c)))].sort();
}
​