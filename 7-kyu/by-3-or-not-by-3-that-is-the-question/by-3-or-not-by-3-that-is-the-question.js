function divisibleByThree(str){
  let sum = str.split('').reduce((acc, d) => acc + Number(d), 0);
  while (sum >= 3) sum -= 3;
  return sum === 0;
}