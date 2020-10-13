// //! Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

// Example

// For n = 2, the output should be
// shapeArea(n) = 5;
// For n = 3, the output should be
// shapeArea(n) = 13.

function shapeArea(n) {
  const area = n * n + (n - 1) * (n - 1);
  return area;
}

console.log("expected output: 5 | actual output: " + shapeArea(2));
console.log("expected output: 13 | actual output: " + shapeArea(3));
console.log("expected output: 1 | actual output: " + shapeArea(1));
console.log("expected output: 41 | actual output: " + shapeArea(5));
console.log("expected output: 97986001 | actual output: " + shapeArea(7000));
console.log("expected output: 127984001 | actual output: " + shapeArea(8000));
console.log("expected output: 199940005 | actual output: " + shapeArea(9999));

//? More solutions

// function shapeArea(n) {
//     return Math.pow(n, 2) + Math.pow(n-1, 2);
// }

// shapeArea=n => {
//     return n * (n-1) * 2 + 1
// }
