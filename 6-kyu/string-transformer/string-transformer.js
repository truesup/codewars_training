function stringTransformer(str) {
  return str
    .split(' ')
    .reverse()
    .map(word =>
      [...word]
        .map(ch =>
          ch === ch.toLowerCase() 
            ? ch.toUpperCase() 
            : ch.toLowerCase()
        ).join('')
    )
    .join(' ');
}
​