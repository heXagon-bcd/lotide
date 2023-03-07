

/**
 * Map function
 * 
 * REQUIREMENTS
 * @param {array} array to clone
 * @param {callback function} function to return value
 */
const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  arr1 = [];
  for(i = 0; i < array.length; i++) {
    arr1.push[array[i]]
  }
}
//
const eqArrays = function(str1, str2) {
  if (JSON.stringify(str1) == JSON.stringify(str2)) {
    console.log("true");
  } else {
    console.log("false");
  }
}


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);
eqArrays(results1, ['g', 'c', 't', 'm', 't'])