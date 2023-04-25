/**
 * this method takes in two arrays and returns true or false, based on a perfect match.
 * @param {boolean compare values} testing strings or numbers to see if they match
 * @return {assert pass or fail}
 * TEST CODE
 * console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
 * assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
 */

const eqArraysAssert = function(str1, str2) {
  if (JSON.stringify(str1) === JSON.stringify(str2)) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArraysAssert;