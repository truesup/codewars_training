function predictAge(age1, age2, age3, age4, age5, age6, age7, age8){
  const ages = [age1, age2, age3, age4, age5, age6, age7, age8];
  const sum = ages.reduce((acc, age) => acc + age * age, 0);
  return Math.floor(Math.sqrt(sum) / 2);
}