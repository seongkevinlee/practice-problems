//! Create a function that takes a string and returns the number (count) of vowels contained within it.

//? Examples
//? countVowels("Celebration") ➞ 5

//? countVowels("Palm") ➞ 1

//? countVowels("Prediction") ➞ 4

function countVowels(str) {
  //   let count = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i].includes("a")) count++;
  //     if (str[i].includes("e")) count++;
  //     if (str[i].includes("i")) count++;
  //     if (str[i].includes("o")) count++;
  //     if (str[i].includes("u")) count++;
  //   }

  //   return count;

  return str.match(/[aeiou]/gi).length;
}

console.log(countVowels("Celebration"), "expected: 5");
console.log(countVowels("Palm"), "expected: 1");
console.log(countVowels("Prediction"), "expected: 4");
console.log(countVowels("Suite"), "expected: 3");
console.log(countVowels("Quote"), "expected: 3");
console.log(countVowels("Age"), "expected: ");
