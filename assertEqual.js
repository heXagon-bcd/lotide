// function that takes in 2 values and returns true if they are equal and false otherwise.
const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    return `✅✅✅ assertion passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 assertion failed: ${actual} != ${expected}`;
  }
};

module.exports = assertEqual;

