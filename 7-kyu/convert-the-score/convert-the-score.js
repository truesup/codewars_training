function scoreboard(string) {
  const map = {
    nil: 0,
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  }
​
  const words = string.toLowerCase().split(/\s+/)
​
  return words
    .filter(w => w in map)
    .map(w => map[w])
}
​