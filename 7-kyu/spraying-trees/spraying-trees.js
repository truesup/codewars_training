function task(w, t, c) {
  const map = {
    Monday: 'James',
    Tuesday: 'John',
    Wednesday: 'Robert',
    Thursday: 'Michael',
    Friday: 'William'
  }
  return `It is ${w} today, ${map[w]}, you have to work, you must spray ${t} trees and you need ${t*c} dollars to buy liquid`
}
​