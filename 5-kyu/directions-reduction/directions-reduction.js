function dirReduc(arr) {
  const opposite = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST'
  };
​
  const stack = [];
​
  for (let dir of arr) {
    if (stack.length && opposite[dir] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }
​
  return stack;
}