/**
 * @param {boolean compare values} testing strings or numbers to see if they match
 * @return {assert pass or fail}
 */

// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if ((actual === expected)) {
//     console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 assertion failed: ${actual} != ${expected}`);
//   }

// };

const assertEqual = require('./assertEqual')

const eqArrays = function(str1, str2) {
  if (JSON.stringify(str1) === JSON.stringify(str2)) {
    return true;
  } else {
    return false;
  }
}
module.exports = {eqArrays, assertEqual};


// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);