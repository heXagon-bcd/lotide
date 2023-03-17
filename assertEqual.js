/**
 * @param {boolean compare values} testing strings or numbers to see if they match
 * @return {assert pass or fail}
 */

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed: ${actual} != ${expected}`);
  }

};

module.exports = assertEqual;

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

