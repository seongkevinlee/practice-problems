//! Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
//! If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

//? Examples
//? largestSwap(14) ➞ false

//? largestSwap(53) ➞ true

//? largestSwap(99) ➞ true

function largestSwap(num) {
  return Number(num.toString().split("").reverse().join("")) <= num;
  //   const swappedString = num.toString().split("").reverse().join("");
  //   const swappedNum = Number(swappedString);

  //   if (num > swappedNum || num === swappedNum) {
  //     return true;
  //   }

  //   return false;
}

console.log(largestSwap(27), "expected: false, 27 < 72, so not largest swap.");
console.log(largestSwap(43), "expected: true, 43 > 34, so largest swap.");
console.log(largestSwap(14), "expected: false, 14 < 41, so not largest swap.");
console.log(largestSwap(53), "expected: true, 53 > 35, so largest swap.");
console.log(
  largestSwap(99),
  "expected: true, Cannot do better, so largest swap."
);
