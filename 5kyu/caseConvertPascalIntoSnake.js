// https://www.codewars.com/kata/529b418d533b76924600085d

// DESCRIPTION:
// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

// ------------------

// My Solution:
function toUnderscore(string) {
  if (typeof string === 'number') return string.toString();

  let tmp = string.split('');
  tmp.map((char, index) => {
    if (!isNaN(char)) return;
    if (char === char.toUpperCase()) {
      tmp.splice(index, 1, char.toLowerCase());
      if (index !== 0) tmp.splice(index, 0, '_');
    }
  });
  return tmp.join('');
}
