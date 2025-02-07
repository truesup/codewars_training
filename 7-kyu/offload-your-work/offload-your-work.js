function workNeeded(projectMinutes, freelancers) {
  const freelancersMinutes = freelancers
    .flat()
    .map((el, ind) => (ind % 2 !== 0 ? el : el * 60))
    .reduce((sum, el) => sum + el, 0);
​
  if (freelancersMinutes >= projectMinutes) {
    return 'Easy Money!';
  } else {
    const minutesDiff = projectMinutes - freelancersMinutes;
​
    return `I need to work ${Math.floor(
      minutesDiff / 60
    )} hour(s) and ${Math.floor(minutesDiff % 60)} minute(s)`;
  }
}
​
console.log(workNeeded(60, [0, 0]));
​