function countSheeps(sheeps) {
  let count = 0
  for (const sheep of sheeps) {
    if (sheep) {
      count++
    }
  }
  return count
}