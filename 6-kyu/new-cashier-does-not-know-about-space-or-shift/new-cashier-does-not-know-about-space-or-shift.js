function getOrder(input) {
  const menu = ["burger","fries","chicken","pizza","sandwich","onionrings","milkshake","coke"];
  let result = [];
  for (let item of menu) {
    let regex = new RegExp(item, "g");
    let matches = input.match(regex);
    if (matches) {
      result.push(...matches.map(m => m[0].toUpperCase() + m.slice(1)));
    }
  }
  return result.join(" ");
}
​