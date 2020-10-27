//! Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

//? Examples
//? getAbsSum([2, -1, 4, 8, 10]) ➞ 25
//? getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
//? getAbsSum([2, 4, 6, 8, 10]) ➞ 30
//? getAbsSum([-1]) ➞ 1

function getAbsSum(arr) {
  return arr.reduce((a, b) => Math.abs(a) + Math.abs(b), 0);
}

console.log(getAbsSum([2, -1, -3, 4, 8]), 18);
console.log(getAbsSum([-1]), 1);
console.log(getAbsSum([-1, -3, -5, -4, -10, 0]), 23);
console.log(getAbsSum([8, 9, 10, 32, 101, -10]), 170);
console.log(getAbsSum([500]), 500);
