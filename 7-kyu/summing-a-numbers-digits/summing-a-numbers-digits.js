function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce((sum, el) => sum + Number(el), 0)
}