//! Given two arguments, return an array which contains these two arguments.

//? Examples
//? makePair(1, 2) ➞ [1, 2]

//? makePair(51, 21) ➞ [51, 21]

//? makePair(512124, 215) ➞ [512124, 215]

function makePair(num1, num2) {
  return [num1, num2];
}

console.log(makePair(1, 2), "expected: [1, 2]");
console.log(makePair(23, 28), "expected: [23, 28]");
console.log(makePair(4213, 526), "expected: [4213, 526]");
