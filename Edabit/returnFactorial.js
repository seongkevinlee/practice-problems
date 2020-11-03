//! Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

//? Examples
//? factorial(3) ➞ 6

//? factorial(5) ➞ 120

//? factorial(13) ➞ 6227020800

function factorial(int) {
  let total = int;
  while (int > 1) {
    int--;
    total *= int;
  }
  return total;
}

console.log(factorial(3), "expected: 6");
console.log(factorial(5), "expected: 120");
console.log(factorial(13), "expected: 6227020800");
