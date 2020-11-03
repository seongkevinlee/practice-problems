//! Create a function that takes the age and return the age in days.

//? Examples
//? calcAge(65) ➞ 23725

//? calcAge(0) ➞ 0

//? calcAge(20) ➞ 7300

function calcAge(age) {
  return age * 365;
}

console.log(calcAge(10), "expected: 3650");
console.log(calcAge(0), "expected: 0");
console.log(calcAge(73), "expected: 26645");
