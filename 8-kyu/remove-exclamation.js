// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let res = '';

  for (let char of s) {
    if (char === '!') {
      continue;
    } else {
      res += char;
    }
  }

  return res;
}

// function removeExclamationMarks(s) {
//   return s.replace(/!/gi, '');
// }
