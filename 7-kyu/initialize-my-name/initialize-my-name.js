function initializeNames(name){
  let parts = name.split(" ");
  if (parts.length <= 2) return name;
  return parts[0] + " " + parts.slice(1, -1).map(n => n[0] + ".").join(" ") + " " + parts[parts.length - 1];
}
​