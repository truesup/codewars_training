function timeCorrect(timestring) {
  if (timestring === null || timestring === "") return timestring;
  if (!/^\d{2}:\d{2}:\d{2}$/.test(timestring)) return null;
  let [h, m, s] = timestring.split(':').map(Number);
  if (s >= 60) { m += Math.floor(s / 60); s %= 60; }
  if (m >= 60) { h += Math.floor(m / 60); m %= 60; }
  h %= 24;
  return [h, m, s].map(x => String(x).padStart(2, '0')).join(':');
}
​