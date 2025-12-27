function riders(stations) {
  if (!stations.length) return 0
  let riders = 1
  let dist = 0
  for (const s of stations) {
    if (dist + s > 100) {
      riders++
      dist = s
    } else {
      dist += s
    }
  }
  return riders
}
​