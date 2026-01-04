function combine(...objects) {
  return objects.reduce((res, obj) => {
    for (const key in obj) {
      res[key] = (res[key] || 0) + obj[key]
    }
    return res
  }, {})
}
​