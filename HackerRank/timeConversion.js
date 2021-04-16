//?! Given a time in -hour AM/PM format, convert it to military (24-hour) time.

//? Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
//? - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

//? Sample input
//? 07:05:45PM

//? Sample output
//? 19:05:45

function timeConversion(s) {
  const arr = s.slice(0, 8).split(":");
  arr[0] =
    s.indexOf("PM") > -1
      ? arr[0] == 12
        ? "12"
        : Number(arr[0]) + 12
      : arr[0] == 12
      ? "00"
      : arr[0];
  return arr.join(":");
}

console.log(timeConversion("07:05:45PM"));
