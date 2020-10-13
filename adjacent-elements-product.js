//! Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) {
  let greatestProduct = -1000;
  for (i = 0; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    console.log("product:", product + " index: " + i);
    if (product > greatestProduct) {
      greatestProduct = product;
    }
    console.log("greatestProduct:", greatestProduct);
  }
  return greatestProduct;
}

console.log(
  "expected output: 21 | actual output: " +
    adjacentElementsProduct([3, 6, -2, -5, 7, 3])
);
console.log(
  "expected output: 2 | actual output: " + adjacentElementsProduct([-1, -2])
);
console.log(
  "expected output: 6 | actual output: " +
    adjacentElementsProduct([5, 1, 2, 3, 1, 4])
);
console.log(
  "expected output: 6 | actual output: " + adjacentElementsProduct([1, 2, 3, 0])
);
console.log(
  "expected output: 50 | actual output: " +
    adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])
);
console.log(
  "expected output: 30 | actual output: " +
    adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])
);
console.log(
  "expected output: 6 | actual output: " +
    adjacentElementsProduct([4, 1, 2, 3, 1, 5])
);
console.log(
  "expected output: -12 | actual output: " +
    adjacentElementsProduct([-23, 4, -3, 8, -12])
);
