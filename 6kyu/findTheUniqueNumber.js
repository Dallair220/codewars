// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

// My Solution:
function findUniq(arr) {
  let v1, v2;
  let v1Num = 0;
  let v2Num = 0;
  arr.forEach((num) => {
    if (v1 === undefined) {
      v1 = num;
      v1Num++;
    } else if (num === v1) {
      v1Num++;
    } else if (v2 === undefined) {
      v2 = num;
      v2Num++;
    } else if (num === v2) {
      v2Num++;
    }
  });
  return v1Num > v2Num ? v2 : v1;
}
