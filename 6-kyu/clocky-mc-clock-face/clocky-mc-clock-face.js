var whatTimeIsIt = function(angle) {
  const totalMinutes = Math.floor(angle / 0.5)
  let hours = Math.floor(totalMinutes / 60) % 12
  const minutes = totalMinutes % 60
  if (hours === 0) hours = 12
  return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0')
}
​