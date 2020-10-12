// !Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.

function centuryFromYear(year) {
  if (year % 100 == 0) {
    return year / 100;
  } else {
    return Math.floor(Number(year / 100) + 1);
  }
}

console.log(centuryFromYear(1905)); //expected output: 20
console.log(centuryFromYear(1700)); //expected output: 17
console.log(centuryFromYear(1988)); //expected output: 20
console.log(centuryFromYear(2000)); //expected output: 20
console.log(centuryFromYear(2001)); //expected output: 21
console.log(centuryFromYear(200)); //expected output: 2
console.log(centuryFromYear(374)); //expected output: 4
