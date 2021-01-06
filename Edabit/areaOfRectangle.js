//! Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

//? Examples
//? area(3, 4) ➞ 12

//? area(10, 11) ➞ 110

//? area(-1, 5) ➞ -1

//? area(0, 2) ➞ -1

function area(h, w) {
  if (h < 1 || w < 1) return -1;
  return h * w;
}

console.log(area(5, 3), "expected: 15");
console.log(area(0, 3), "expected: -1");
console.log(area(-2, -5), "expected: -1");
