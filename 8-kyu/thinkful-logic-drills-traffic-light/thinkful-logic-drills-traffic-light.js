function updateLight(current) {
  return current === 'green'
    ? 'yellow'
    : current === 'yellow'
    ? 'red'
    : current === 'red'
    ? 'green'
    : undefined
}