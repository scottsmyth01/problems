/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a, b) {
  let sum = a + b;
  let n = 0;
  let total = 0;

  //   2^7  <= sum ? true; n--
  //   2^6 + total <= sum ? false; total = 2^6 + total
  //   2^5 + total <= sum ? false: total = 2^5 + total
  //   etc..

  while (Math.pow(2, n) <= sum) {
    n++;
  }

  let res = '';

  for (let i = n; i >= 0; i--) {
    if (Math.pow(2, i) + total <= sum) {
      res += '1';
      total = total + Math.pow(2, i);
    } else {
      res += '0';
    }
  }

  return res === '' ? '0' : res;
}

console.log(addBinary(100, 0));
