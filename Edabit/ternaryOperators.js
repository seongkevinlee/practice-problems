//! Write a function that uses the ternary operator to return "yeah" if b is true, and "nope" otherwise.

//? Examples
//? yeah_nope(true) ➞ "yeah"

//? yeah_nope(false) ➞ "nope"

function yeah_nope(bool) {
  return bool ? "yeah" : "nope";
}

console.log(yeah_nope(true), "expected: yeah");
console.log(yeah_nope(false), "expected: nope");
