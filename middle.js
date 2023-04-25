/**
 * This method will take in an array and return the middle-most element(s) of the given array.
 * @param {array} testing strings or numbers to see if they match
 * @return {element|string|number} returns middle elemnent within an array
 * TEST CODE
 * middle([1, 2, 3, 4, 5]);
 */

// ACTUAL FUNCTION
const middle = function(array) {
  let midNum = array.length / 2;
  if (array.length % 2 !== 0) {
    return [array[Math.floor(midNum)]];
  } else if (array.length % 2 === 0) {
    return array.slice(Math.floor(midNum) - 1, Math.ceil(midNum) + 1);
  }
};

module.exports = middle ;