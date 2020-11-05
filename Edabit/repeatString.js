//! Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

//! String.prototype.repeat() is not allowed

//? Examples
//? repetition("ab", 3) ➞ "ababab"

//? repetition("kiwi", 1) ➞ "kiwi"

//? repetition("cherry", 2) ➞ "cherrycherry"

function repetition(txt, n) {
  let newTxt = "";

  while (n > 0) {
    newTxt += txt;
    n--;
  }

  return newTxt;
}

console.log(repetition("soccer", 2), "expected: soccersoccer");
console.log(repetition("ab", 3), "expected: ababab");
console.log(repetition("bonita", 1), "expected: bonita");
console.log(repetition("ciao", 4), "expected: ciaociaociaociao");
