/**
* Implement the function findKeyByValue which takes in an object and a value. It should scan the
* object and return the first key which contains the given value. If no key with that given value is found,
* then it should return undefined.
* @param {Object} -> input the object that you want to search in an array
* @param {TV Show} =>
*test
*console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
*assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
*assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/

const assertEqual = require("./assertEqual");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(obj, show) {
  let arr = [];
  for (let ky in obj) {
    if (obj[ky] === show) {
      arr.push(ky);
    }
  }
  return arr[0];// ask dev to review this🛑🛑🛑
};

module.exports = {findKeyByValue};