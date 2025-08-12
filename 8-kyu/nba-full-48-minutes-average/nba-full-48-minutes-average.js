function pointsPer48(ppg, mpg) {
  return mpg === 0 ? 0 : Number(((ppg / mpg) * 48).toFixed(1));
}