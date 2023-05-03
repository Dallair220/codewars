// https://www.codewars.com/kata/52685f7382004e774f0001f7

// DESCRIPTION:
// Write a function, which takes a non-negative integer (seconds) as input,
// and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// --------

// My Solution:
function humanReadable(seconds) {
  // calculate hours amount, add padding '0', deduct it from the total seconds
  let h = Math.floor(seconds / 3600);
  if (h < 10) h = '0' + h;
  seconds -= h * 3600;

  // calculate minutes
  let m = Math.floor(seconds / 60);
  seconds -= m * 60;
  if (m < 10) m = '0' + m;

  // calculate seconds
  let s = seconds;
  if (s < 10) s = '0' + s;

  return `${h}:${m}:${s}`;
}
