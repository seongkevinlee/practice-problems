//! Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//! An input string is valid if:

//! Open brackets must be closed by the same type of brackets.
//! Open brackets must be closed in the correct order.

//? Example 1:

//? Input: s = "()"
//? Output: true
//? Example 2:

//? Input: s = "()[]{}"
//? Output: true
//? Example 3:

//? Input: s = "(]"
//? Output: false
//? Example 4:

//? Input: s = "([)]"
//? Output: false

var isValid = function (s) {
  let str = [];
  const n = s.length;
  var index = 0;
  for (let i = 0; i < n; i++) {
    const c = s[i];

    if (c == "(" || c == "{" || c == "[") {
      str[index] = c;
      index++;
    } else {
      var size = str.length;
      if (
        size == 0 ||
        Math.abs(c.charCodeAt(0) - str[size - 1].charCodeAt(0)) > 2
      ) {
        return false;
      }
      str.pop();
      index--;
    }
  }

  return index == 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
