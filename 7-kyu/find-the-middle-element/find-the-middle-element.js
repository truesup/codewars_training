function gimme (triplet) {
  const sortedTriplet = [...triplet].sort((a, b) => a - b)
  const midElem = sortedTriplet[1]
  return triplet.indexOf(midElem)
}