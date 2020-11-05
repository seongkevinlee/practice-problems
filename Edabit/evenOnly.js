//! Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.

//? Examples
//? getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

//? getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

//? getOnlyEvens([1, 2, 3, 4, 5]) ➞ []

function getOnlyEvens(nums) {
  let evens = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && i % 2 === 0) evens.push(nums[i]);
  }

  return evens;
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]), "expected: [2, 4]");
console.log(getOnlyEvens([49, 41, 30, 44, 26, 0, 5]), "expected: [30, 26]");
console.log(
  getOnlyEvens([30, 26, 0, 13, 20, 38, 50, 2]),
  "expected: [30, 0, 20, 50]"
);
console.log(
  getOnlyEvens([34, 21, 38, 28, 13, 8, 26, 29, 24, 5]),
  "expected: [34, 38, 26, 24]"
);
