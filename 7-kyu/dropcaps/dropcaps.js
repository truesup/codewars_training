function dropCap(n) {
  return n.replace(/\S+/g, w =>
    w.length > 2 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w
  )
}
​