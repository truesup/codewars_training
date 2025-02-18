Array.prototype.even = function() {
  return this.filter(n => Number.isInteger(n) && n % 2 === 0);
};
Array.prototype.odd = function() {
  return this.filter(n => Number.isInteger(n) && n % 2 !== 0);
};
Array.prototype.under = function(limit) {
  return this.filter(n => Number.isInteger(n) && n < limit);
};
Array.prototype.over = function(limit) {
  return this.filter(n => Number.isInteger(n) && n > limit);
};
Array.prototype.inRange = function(min, max) {
  return this.filter(n => Number.isInteger(n) && n >= min && n <= max);
};