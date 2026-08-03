/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function (arr, fn) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
};

const arr = [1, 2, 3];
const fn = function plusone(n) {
  return n + 1;
};

console.log(map(arr, fn));
