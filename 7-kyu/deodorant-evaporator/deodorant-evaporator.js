function evaporator(content, evapPerDay, threshold) {
  let days = 0;
  let limit = content * (threshold / 100);
  while (content > limit) {
    content -= content * (evapPerDay / 100);
    days++;
  }
  return days;
}