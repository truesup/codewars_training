function race(v1, v2, g) {
  if (v1 >= v2) return null;
​
  const timeInHours = g / (v2 - v1);
  const hours = Math.floor(timeInHours);
  const minutes = Math.floor((timeInHours * 60) % 60);
  const seconds = Math.floor((timeInHours * 3600) % 60);
​
  return [hours, minutes, seconds];
}