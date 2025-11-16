Math.round = function(number) {
  var floor = number | 0;
  var decimal = number - floor;
​
  return decimal >= 0.5 ? floor + 1 : floor;
};
​
Math.ceil = function(number) {
  var floor = number | 0;
  return number === floor ? floor : floor + 1;
};
​
Math.floor = function(number) {
  return number | 0;
};
​