// https://www.codewars.com/kata/526989a41034285187000de4

// DESCRIPTION:
// Implement a function that receives two IPv4 addresses,
// and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings.
// The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

// --------

// My Solution:
function ipsBetween(start, end) {
  const startSplit = start.split('.');
  const endSplit = end.split('.');
  let diff = [];

  // calculate differences between ips
  startSplit.forEach((oct, index) => {
    diff.push(endSplit[index] - oct);
  });

  return calculateDiff(diff);
}

function calculateDiff(diff) {
  let power = 24;
  return diff.reduce((sum, currentOct) => {
    power > 0 ? (sum += currentOct * 2 ** power) : (sum += currentOct);
    // Lower power by 8, as we go to the next octet
    power -= 8;
    return sum;
  }, 0);
}
