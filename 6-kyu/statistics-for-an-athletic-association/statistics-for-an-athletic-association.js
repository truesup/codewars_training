function stat(strg) {
  if (!strg) return "";
​
  const times = strg.split(",").map(t => {
    let [h, m, s] = t.trim().split("|").map(Number);
    return h * 3600 + m * 60 + s;
  });
​
  times.sort((a, b) => a - b);
​
  const range = times[times.length - 1] - times[0];
  const average = Math.floor(times.reduce((a, b) => a + b, 0) / times.length);
​
  let median;
  const mid = Math.floor(times.length / 2);
  if (times.length % 2 === 0) {
    median = Math.floor((times[mid - 1] + times[mid]) / 2);
  } else {
    median = times[mid];
  }
​
  const formatTime = secs => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${h}|${m}|${s}`;
  };
​
  return `Range: ${formatTime(range)} Average: ${formatTime(average)} Median: ${formatTime(median)}`;
}