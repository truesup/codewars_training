function bald(x) {
  const count = (x.match(/\//g) || []).length;
  const clean = x.replace(/\//g, "-");
  let msg;
  if (count === 0) msg = "Clean!";
  else if (count === 1) msg = "Unicorn!";
  else if (count === 2) msg = "Homer!";
  else if (count <= 5) msg = "Careless!";
  else msg = "Hobo!";
  return [clean, msg];
}
​