//function that takes in an object and callback and returns the first key that meets the criteria specified in callback.
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