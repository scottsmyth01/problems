/*
Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
Other characters: 0 value
Note: input will always be a string

*/

function lettersToNumbers(s) {
  let count = 0;
  let letters = [
    '',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  for (let i = 0; i < s.length; i++) {
    console.log('char:' + s[i]);
    if (s[i] === ' ') continue;
    if (/^\d$/.test(s[i])) {
      //   console.log('value ' + Number(s[i]));
      count += Number(s[i]);
      continue;
    }
    if (/^[^a-zA-Z0-9]$/.test(s[i])) {
      continue;
    }
    if (s[i] === s[i].toUpperCase()) {
      //   console.log('value: ' + letters.indexOf(s[i].toLowerCase()) * 2);
      count += letters.indexOf(s[i].toLowerCase()) * 2;
    }
    if (s[i] === s[i].toLowerCase()) {
      //   console.log('value ' + letters.indexOf(s[i]));
      count += letters.indexOf(s[i]);
    }
  }
  return count;
}

// console.log(lettersToNumbers('ILoveYou'));
// console.log(lettersToNumbers('I Love You'));
// console.log(lettersToNumbers('ARE YOU HUNGRY?'));
console.log(lettersToNumbers('Give me 5!'));
