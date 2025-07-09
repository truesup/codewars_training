function solve(s) {
  const vowels = /[aeiou]/g;
  return Math.max(
    ...s
      .split(vowels)
      .map(sub =>
        [...sub].reduce((sum, ch) => sum + ch.charCodeAt(0) - 96, 0)
      )
  );
}