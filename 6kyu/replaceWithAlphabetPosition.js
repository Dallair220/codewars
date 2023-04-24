//https://www.codewars.com/kata/546f922b54af40e1e90001da

// DESCRIPTION:
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// ------------------

// My Solution:

/** WORKS, but I want to try it with spread.
function alphabetPosition(text) {
  let pos = '';
  
  for(let i = 0; i < text.length; i++){
    if(text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) pos += (text.charCodeAt(i) - 64) + ' ';
    if(text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123) pos += (text.charCodeAt(i) - 96) + ' ';
  }
  
  return pos.slice(0,-1);
}**/

// Also works! Nice.
function alphabetPosition(text) {
  let pos = '';
  let charArray = [...text];

  charArray.forEach((char) => {
    if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91)
      pos += char.charCodeAt(0) - 64 + ' ';
    if (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
      pos += char.charCodeAt(0) - 96 + ' ';
  });

  return pos.slice(0, -1);
}
