// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// My solution 1st try:
function digitalRoot(n) {
  let sum = 0;

  for (let i = 0; i < n.toString().length; i++) {
    sum += parseInt(n.toString().charAt(i));
  }

  return sum.toString().length < 2 ? sum : digitalRoot(sum);
}

// My Solution 2nd try:
function digitalRoot(n) {
  let root = 0;
  // return if no sum of digits possible
  if (n.toString().length <= 1) return n;
  // save sum of digits in root variable
  for (let i = 0; i < n.toString().length; i++) {
    root += +n.toString()[i];
  }
  // recursive call as long as the number has 2 or more digits
  return digitalRoot(root);
}
