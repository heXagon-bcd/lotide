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

const findKey = function(object, callback) {

  for (let i = 0; i < Object.keys(object).length; i++) {
    let key = Object.keys(object)[i];
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined; //if no key is found, then return undefined
};

module.exports = findKey;