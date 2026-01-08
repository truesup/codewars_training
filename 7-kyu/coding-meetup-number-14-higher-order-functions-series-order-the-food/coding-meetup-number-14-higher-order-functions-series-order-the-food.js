function orderFood(list) {
  return list.reduce((acc, { meal }) => {
    acc[meal] = (acc[meal] || 0) + 1
    return acc
  }, {})
}
​