/**
 * Map function
 * REQUIREMENTS
 * @param {array} array to clone
 * @param {callback function} function to return value
 * test function
 * console.log(results1);
 * eqArrays(results1, ['g', 'c', 't', 'm', 't'])===> true
 */
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);

module.exports = map;