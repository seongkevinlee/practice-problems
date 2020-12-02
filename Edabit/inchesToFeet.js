//! Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

//? Examples
//? inchesToFeet(324) ➞ 27

//? inchesToFeet(12) ➞ 1

//? inchesToFeet(36) ➞ 3

function inchesToFeet(inches) {
  return Math.floor(inches / 12);
}

console.log(inchesToFeet(12), "expected: 1");
console.log(inchesToFeet(360), "expected: 30");
console.log(inchesToFeet(3612), "expected: 301");
console.log(inchesToFeet(324), "expected: 27");
console.log(inchesToFeet(3012), "expected: 251");
console.log(inchesToFeet(11), "expected: 0");
