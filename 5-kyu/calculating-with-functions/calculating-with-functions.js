function plus(r)     { return function(l){ return l + r; }; }
function minus(r)    { return function(l){ return l - r; }; }
function times(r)    { return function(l){ return l * r; }; }
function dividedBy(r){ return function(l){ return Math.floor(l / r); }; }
​
function num(n) {
  return function(op) {
    return op ? op(n) : n;
  };
}
​
const zero  = num(0);
const one   = num(1);
const two   = num(2);
const three = num(3);
const four  = num(4);
const five  = num(5);
const six   = num(6);
const seven = num(7);
const eight = num(8);
const nine  = num(9);
​
console.log( seven(times(five())) );
console.log( four(plus(nine())) );
console.log( eight(minus(three())) );
console.log( six(dividedBy(two())) );