function calculateAge(yearOfBirth, yearToCount) {
  let diff = yearToCount - yearOfBirth;
​
  if (diff === 0) {
    return "You were born this very year!";
  } else if (diff > 0) {
    return `You are ${diff} year${diff === 1 ? "" : "s"} old.`;
  } else {
    diff = Math.abs(diff);
    return `You will be born in ${diff} year${diff === 1 ? "" : "s"}.`;
  }
}
​