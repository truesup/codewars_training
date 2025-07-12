function alphabetWar(fight) {
  const left = { w: 4, p: 3, b: 2, s: 1 };
  const right = { m: 4, q: 3, d: 2, z: 1 };
​
  let score = 0;
​
  for (let char of fight) {
    if (left[char]) score += left[char];
    else if (right[char]) score -= right[char];
  }
​
  if (score > 0) return "Left side wins!";
  else if (score < 0) return "Right side wins!";
  else return "Let's fight again!";
}