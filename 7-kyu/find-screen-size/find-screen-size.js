function findScreenHeight(width, ratio) {
  const [w, h] = ratio.split(':').map(Number)
  return `${width}x${Math.floor(width * h / w)}`
}
​