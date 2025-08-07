function encode(string) {
  return string.replace(/[aeiou]/g, c => 'aeiou'.indexOf(c) + 1);
}
​
function decode(string) {
  return string.replace(/[1-5]/g, n => 'aeiou'[n - 1]);
}