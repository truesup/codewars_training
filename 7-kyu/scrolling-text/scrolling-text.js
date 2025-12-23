function scrollingText(text){
  const s = text.toUpperCase();
  return [...s].map((_, i) => s.slice(i) + s.slice(0, i));
}
​