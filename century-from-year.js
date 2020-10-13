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

console.log("expected output: 20 | actual output: " + centuryFromYear(1905));
console.log("expected output: 17 | actual output: " + centuryFromYear(1700));
console.log("expected output: 20 | actual output: " + centuryFromYear(1988));
console.log("expected output: 20 | actual output: " + centuryFromYear(2000));
console.log("expected output: 21 | actual output: " + centuryFromYear(2001));
console.log("expected output: 2 | actual output: " + centuryFromYear(200));
console.log("expected output: 4 | actual output: " + centuryFromYear(374));
