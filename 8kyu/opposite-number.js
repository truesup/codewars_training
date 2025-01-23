// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

function opposite(number) {
  return number < 0 ? Math.abs(number) : Number('-' + String(number));
}

// function opposite(number) {
//   return(-number);
// }
