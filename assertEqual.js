/**
 * This method determines whether or not array values are strictly equal
 * 
 * 
 * @param {boolean compare values} testing strings or numbers to see if they match
 * @return {assert pass or fail}
 * 
 * TEST CODE
 * assertEqual("Lighthouse Labs", "Bootcamp"); => will return passed
 * assertEqual(1, 1); => will return passed
 * 
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

