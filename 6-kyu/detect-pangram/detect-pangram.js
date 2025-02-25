function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const loweredStr = string.toLowerCase()
  return [...alphabet].every(letter => loweredStr.includes(letter))
}