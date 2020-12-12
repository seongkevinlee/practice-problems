//! Create a function that takes a word and returns the new word without including the first character.

//? Examples
//? newWord("apple") ➞ "pple"

//? newWord("cherry") ➞ "herry"

//? newWord("plum") ➞ "lum"

function newWord(str) {
  const newWord = [];
  for (let i = 1; i < str.length; i++) {
    newWord.push(str[i]);
  }
  return newWord.join("");
}
