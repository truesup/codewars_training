function outed(meet, boss){
  let total = 0;
  let count = 0;
​
  for (let person in meet) {
    total += person === boss ? meet[person] * 2 : meet[person];
    count++;
  }
​
  return (total / count) <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}