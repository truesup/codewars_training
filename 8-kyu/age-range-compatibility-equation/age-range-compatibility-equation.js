function datingRange(age){
  let min, max;
  if (age <= 14) {
    min = Math.floor(age - age * 0.10);
    max = Math.floor(age + age * 0.10);
  } else {
    min = Math.floor(age / 2 + 7);
    max = Math.floor(2 * (age - 7));
  }
  return `${min}-${max}`;
}
​