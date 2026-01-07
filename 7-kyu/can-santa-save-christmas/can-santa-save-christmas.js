function determineTime(durations) {
  const totalSeconds = durations.reduce((sum, time) => {
    const [h, m, s] = time.split(':').map(Number)
    return sum + h * 3600 + m * 60 + s
  }, 0)
​
  return totalSeconds <= 24 * 3600
}
​