function findMissingNumber(sequence){
  if (!sequence.trim()) return 0
​
  const parts = sequence.split(' ')
  const nums = []
​
  for (const p of parts) {
    if (!/^\d+$/.test(p)) return 1
    nums.push(+p)
  }
​
  const max = Math.max(...nums)
  for (let i = 1; i <= max; i++) {
    if (!nums.includes(i)) return i
  }
​
  return 0
}
​