function reverse(str){
  return str
    .trim()
    .split(/\s+/)
    .map((word, index) => 
      index % 2 === 1 ? word.split('').reverse().join('') : word
    )
    .join(' ');
}