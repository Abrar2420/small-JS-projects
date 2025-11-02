// Leap Year Checker

// 1. A year is a leap year if it is divisible by 4.
// 2. BUT, if the year is divisible by 100, it is NOT a leap year,
//    UNLESS the year is also divisible by 400.

let yearInput = +prompt("Enter the year:");
function isLeap(year) {
  var result;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        result = "This is a leap year.";
      } else {
        result = "This is not a leap year.";
      }
    } else {
      result = "This is a leap year.";
    }
  } else {
    result = "This is not a leap year.";
  }

  return result;
}

let showResult = isLeap(yearInput);
console.log(showResult);
