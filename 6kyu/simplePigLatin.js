// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My Solution:
function pigIt(str) {
  const arr = str.split(' ');
  let arr2 = arr.map((item) => {
    let ret = item;
    if (item !== '!' && item !== '?') {
      ret = `${ret}${item.charAt(0)}ay`;
      ret = ret.slice(1);
    }
    return ret;
  });
  return arr2.join(' ');
}
