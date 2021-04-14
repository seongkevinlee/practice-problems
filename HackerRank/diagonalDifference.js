//! Given a square matrix, calculate the absolute difference between the sums of its diagonals.

//? For example, the square matrix  is shown below:

//? 1 2 3
//? 4 5 6
//? 9 8 9
//? The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

//? Function description

//? Complete the  function in the editor below.

//? diagonalDifference takes the following parameter:

//? int arr[n][m]: an array of integers
//? Return

//? int: the absolute diagonal difference

function diagonalDifference(arr) {
  // Write your code here'
  let d1 = 0;
  let d2 = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        d1 += arr[i][j];
      }
      if (i + j === n - 1) {
        d2 += arr[i][j];
      }
    }
  }
  return Math.abs(d1 - d2);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
console.log(
  diagonalDifference([
    [11, 2, 4, 122],
    [4, 5, 6, 9],
    [145, 8, -12, -44],
    [145, 8, -12, -44],
  ])
);
