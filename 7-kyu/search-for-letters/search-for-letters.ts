export function change(string: string): string {
  const lower = string.toLowerCase()
  const result = Array(26).fill('0')
​
  for (let char of lower) {
    const code = char.charCodeAt(0)
    if (code >= 97 && code <= 122) {
      const index = code - 97
      result[index] = '1'
    }
  }
​
  return result.join('')
}