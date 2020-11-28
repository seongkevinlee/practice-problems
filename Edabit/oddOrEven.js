//! Given a string, return true if its length is even or false if the length is odd.

//? Examples
//? oddOrEven("apples") ➞ true

//? oddOrEven("pears") ➞ false

//? oddOrEven("cherry") ➞ true

function oddOrEven(s) {
  return s.length % 2 === 0 ? true : false;
}

console.log(oddOrEven("apples"), "expected: true");
console.log(oddOrEven("banana"), "expected: true");
console.log(oddOrEven("cherry"), "expected: true");
console.log(oddOrEven("mango"), "expected: false");
console.log(oddOrEven("peach"), "expected: false");
console.log(oddOrEven("pears"), "expected: false");
