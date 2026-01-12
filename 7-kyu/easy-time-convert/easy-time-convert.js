function timeConvert(num) { 
  if (num <= 0) return "00:00"
  const h = Math.floor(num / 60)
  const m = num % 60
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`
}
​