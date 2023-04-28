// https://www.codewars.com/kata/52449b062fb80683ec000024

// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// ----------------------

// My Solution:
function generateHashtag(str) {
  let hashtag = '#';

  // remove spaces and capitalize each word's first letter
  str.split(' ').forEach((word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    hashtag += word;
  });

  if (hashtag.length > 140) return false;
  if (hashtag.charAt(1) === '') return false;
  return hashtag;
}
