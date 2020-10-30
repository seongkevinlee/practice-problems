// var reverse = function (x) {
//   const arr = x.toString().split("");
//   console.log("arr:", arr);
//   const arr2 = arr.sort((a, b) => b - a);
//   console.log("arr2:", arr2);
//   const string = arr2.join("");
//   console.log("string:", string);
//   return parseInt(string);
// };

var reverse = function (x) {
  let negative = x < 0;
  let reversed = 0;

  if (negative) x *= -1;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (reversed > 2 ** 31 - 1) return 0;
  return negative ? reversed * -1 : reversed;
};

console.log(reverse(123));
console.log(reverse(120));
console.log(reverse(-123));
console.log(reverse(1534236469));
console.log(reverse(-8463847412));
