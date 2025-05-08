function smallEnough(arr, limit){
  const filtered = arr.filter(el => el <= limit)
  
  return filtered.length === arr.length
}