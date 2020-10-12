//! Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.

function checkPalindrome(inputString) {
  const reversed = inputString.split("").reverse().join("");
  if (inputString === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("aabaa")); //expected output: true
console.log(checkPalindrome("aaerrbaa")); //expected output: false
