function mazeRunner(maze, directions) {
  let x, y
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        y = i
        x = j
      }
    }
  }
​
  for (let dir of directions) {
    if (dir === "N") y--
    if (dir === "S") y++
    if (dir === "E") x++
    if (dir === "W") x--
​
    if (y < 0 || y >= maze.length || x < 0 || x >= maze[0].length) return "Dead"
    if (maze[y][x] === 1) return "Dead"
    if (maze[y][x] === 3) return "Finish"
  }
​
  return "Lost"
}
​