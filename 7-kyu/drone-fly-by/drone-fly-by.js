function flyBy(lamps, drone){
  return lamps
    .split('')
    .map((lamp, i) => i < drone.length ? 'o' : 'x')
    .join('');
}
​