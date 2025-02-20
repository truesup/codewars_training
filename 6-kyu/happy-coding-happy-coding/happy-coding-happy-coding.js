function happyCoding(nickname) {
  const words = nickname.toLowerCase().split(' ')
​
  const hasHappy = words.includes('happy')
  const hasCoding = words.includes('coding')
​
  if (hasHappy && hasCoding) {
    return words.indexOf('happy') < words.indexOf('coding') ? 1 : 2
  }
  if (hasCoding) return 3
  if (hasHappy) return 4
  return 5
}