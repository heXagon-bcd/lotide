// function that takes in 2 objects and returns true if they are equal and false otherwise.
const assertArraysEqual = require('./assertArraysEqual')
const assertObjectsEqual = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  for (let ky in object1) {
    if (object1[ky] === object2[ky] && arr1.length === arr2.length) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = assertObjectsEqual;