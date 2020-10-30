//! Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

//? Example 1:

//? Input: x = 121
//? Output: true
//? Example 2:

//? Input: x = -121
//? Output: false
//? Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
//? Example 3:

//? Input: x = 10
//? Output: false
//? Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
//? Example 4:

//? Input: x = -101
//? Output: false

var isPalindrome = function (x) {
  x = x + "";
  const reversed = x.split("").reverse().join("");
  if (x == reversed) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
