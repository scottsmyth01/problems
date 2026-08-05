/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/

function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    for (const char of pin) {
      if (isNaN(char) || char === '\n') {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(validatePIN('123'));
