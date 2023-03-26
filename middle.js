/**
 * This method will find the middle value of an array
 * @param {array} testing strings or numbers to see if they match
 * @return {element|string|number} returns middle elemnent within an array
 * TEST CODE
 * middle([1, 2, 3, 4, 5]);
 */

const {eqArrays, assertEqual} = require('./eqArrays');

// ACTUAL FUNCTION
const middle = function(array) {
  // find the middle number
  let midNum = array.length / 2;
  // if there is a no remainder return array value with middle string
  if (array.length % 2 !== 0) {
    return [array[Math.floor(midNum)]];
  } else if (array.length % 2 === 0) {
    return array.slice(Math.floor(midNum) - 1, Math.ceil(midNum) + 1);
  }
  //if there is a middle number take the floor and ceil of the string
};

module.exports = {eqArrays, assertEqual, middle};