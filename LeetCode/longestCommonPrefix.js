//! Write a function to find the longest common prefix string amongst an array of strings.

//! If there is no common prefix, return an empty string "".

//? Example 1:
//? Input: strs = ["flower","flow","flight"]
//? Output: "fl"

//? Example 2:
//? Input: strs = ["dog","racecar","car"]
//? Output: ""
//? Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return prefix;
    }
    prefix += strs[0][i];
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
