export function hello(name = ''): string {
  if (name.length > 0) {
    const firstLetter: string = name[0].toUpperCase()
    const restLetters: string = name.slice(1).toLowerCase()
    const fullname: string = firstLetter + restLetters
    return `Hello, ${fullname}!`
  }
  
  return 'Hello, World!'
}