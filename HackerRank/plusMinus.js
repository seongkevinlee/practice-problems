//! Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

//? Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

//? Function Description

//? Complete the plusMinus function in the editor below.

//? plusMinus has the following parameter(s):

//? int arr[n]: an array of integers
//? Print
//? Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  const length = arr.length;

  arr.forEach((e) => {
    if (e > 0) pos++;
    if (e < 0) neg++;
    if (e === 0) zero++;
  });

  //   return `
  // ${(pos / length).toFixed(6)}
  // ${(neg / length).toFixed(6)}
  // ${(zero / length).toFixed(6)}
  // `;

  console.log((pos / length).toFixed(6));
  console.log((neg / length).toFixed(6));
  console.log((zero / length).toFixed(6));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
