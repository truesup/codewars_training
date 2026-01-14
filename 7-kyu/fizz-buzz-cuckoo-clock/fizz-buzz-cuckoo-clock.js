function fizzBuzzCuckooClock(time) {
  const [h,m] = time.split(':').map(Number)
  if (m === 0) {
    const hh = h % 12 === 0 ? 12 : h % 12
    return Array(hh).fill('Cuckoo').join(' ')
  }
  if (m === 30) return 'Cuckoo'
  const fizz = m % 3 === 0
  const buzz = m % 5 === 0
  if (fizz && buzz) return 'Fizz Buzz'
  if (fizz) return 'Fizz'
  if (buzz) return 'Buzz'
  return 'tick'
}
​