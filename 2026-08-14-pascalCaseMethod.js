String.prototype.camelCase = function () {
  newStr = '';
  capitalFlag = false;

  for (let i = 0; i < this.length; i++) {
    if (this[i] === ' ') {
      capitalFlag = true;
      continue;
    }
    // make first letter upper case
    if (capitalFlag === true || i === 0) {
      newStr += this[i].toLocaleUpperCase();
    } else {
      newStr += this[i];
    }
    capitalFlag = false;
  }
  return newStr;
};

console.log('pascal case word'.camelCase());
