//! After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

//! Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

//? Examples

//? For
//? matrix = [[0, 1, 1, 2],
//?           [0, 5, 0, 0],
//?           [2, 0, 3, 3]]
//? the output should be
//? matrixElementsSum(matrix) = 9.

//? For
//? matrix = [[1, 1, 1, 0],
//?           [0, 5, 0, 1],
//?           [2, 1, 3, 10]]
//? the output should be
//? matrixElementsSum(matrix) = 9.

function matrixElementsSum(matrix) {
  let priceTotal = 0;
  let bannedIndex = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let c = 0; c < matrix[i].length; c++) {
      if (matrix[i][c] === 0) {
        bannedIndex.push(c);
      } else if (bannedIndex.indexOf(c) === -1) {
        priceTotal += matrix[i][c];
      }
    }
  }
  return priceTotal;
}

const matrix1 = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];
const matrix2 = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
];
const matrix3 = [
  [4, 0, 1],
  [10, 7, 0],
  [0, 0, 0],
  [9, 1, 2],
];

console.log(matrixElementsSum(matrix1));
console.log(matrixElementsSum(matrix2));
console.log(matrixElementsSum(matrix3));
