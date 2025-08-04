var greet = function(name) {
  let capitalized = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello ${capitalized}!`;
};