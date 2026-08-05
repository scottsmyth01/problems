// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let newStr = '';
  for (const char of s) {
    if (char === '!') continue;
    else newStr += char;
  }
  return newStr;
}

console.log(removeExclamationMarks('STRING!!!'));
