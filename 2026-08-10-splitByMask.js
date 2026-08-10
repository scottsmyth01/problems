/*
Description:
Given a xs and a mask (a list of lengths), split the string into its parts accordingly.

Examples:
|     xs        |  Mask (lengths) |          Output           |
|---------------|-----------------|---------------------------|
|  "1234567890" |  [3, 3, 4]      |  ["123", "456", "7890"]   |
|  "codewars"   |  [4, 4]         |  ["code", "wars"]         |
Notes:
The mask only contains strictly positive integers.
A mask is valid if and only if the sum of the lengths is equal to the length of the string.
Otherwise, return None.

(0,3), (4,6) (7+)

*/

function split(string, mask) {
  if (typeof string !== 'string' || !Array.isArray(mask)) {
    return null;
  }

  if (mask.reduce((sum, length) => sum + length, 0) !== string.length) {
    return null;
  }

  let res = [];
  let run = 0;
  let runTo = 0;

  for (let i = 0; i < mask.length; i++) {
    runTo = runTo + mask[i];
    res.push(string.slice(run, runTo));
    run = runTo;
  }

  return res;
}

console.log(split('1234567890', [3, 3, 4]));
