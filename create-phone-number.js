//! Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in form of a phone number.

//EXAMPLES
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

// createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ➞ "(111) 111-1111"

// createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]) ➞ "(874) 125-6582"

// define 3 empty array
// slice

const answer = createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]);
const question =
  "Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in form of a phone number.";
const example = `createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) = "(123) 456-7890"`;

function createPhoneNumber(numbers) {
  const first = [numbers.slice(0, 3).join("")];

  const second = [numbers.slice(3, 6).join("")];

  const third = [numbers.slice(6, 10).join("")];

  const formattedNumber = `(${first}) ${second}-${third}`;

  return formattedNumber;
}

$(".answer").append(answer);
$(".question").append(question);
$(".examples").append(example);

//Other solutions

/*
const createPhoneNumber = arr =>
  '(xxx) xxx-xxxx'.replace(/x/g, v => arr.shift());
  
function createPhoneNumber(numbers) {
	let number = "(xxx) xxx-xxxx";
	for(let i = 0; i < numbers.length; i++) {
		number = number.replace('x', numbers[i]);
	}
	return number;
}  

function createPhoneNumber(numbers) {
	return `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6).join("")}`
}
*/
