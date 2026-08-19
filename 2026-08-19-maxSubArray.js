/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

For example:

Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6 (Sum of [4, -1, 2, 1])
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead. Your solution should be fast, it will be tested on very large arrays so slow solutions will time out.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

function maxSequence(arr) {
  let runningSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let temp = arr.slice(i, j);
      let sum = temp.reduce((acc, num) => acc + num, 0);
      console.log(sum);
      if (sum > runningSum) runningSum = sum;
    }
  }
  return runningSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]));
