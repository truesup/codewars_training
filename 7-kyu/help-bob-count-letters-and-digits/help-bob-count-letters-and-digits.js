function countLettersAndDigits(input) {
  return (input.match(/[a-z0-9]/gi) || []).length
}
​