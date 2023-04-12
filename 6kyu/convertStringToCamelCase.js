// https://www.codewars.com/kata/517abf86da9663f1d2000003

// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples:
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// My Solution
function toCamelCase(str) {
  for (let i = 0; i < str.length; i++) {
    let currentChar = str.charAt(i);
    if (currentChar === '-' || currentChar === '_') {
      // remove the dash char
      str = str.slice(0, i) + str.slice(i + 1);
      // capitalize the char after dash
      str = str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1);
    }
  }
  return str;
}
