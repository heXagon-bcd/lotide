
//ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed: ${actual} != ${expected}`);
  }

};
/**
 * TEST
 */

const names = {
  shawn: 22, 
  jessica: 23,
  jasmine: 24,
  sharon: 25,
  kevin: 27
};

console.log(names["shawn"]);
//console.log(names.indexOf(22));
console.log(Object.keys(names))
/**
 * Implement the function findKeyByValue which takes in an object and a value. It should scan the
 * object and return the first key which contains the given value. If no key with that given value is found,
 * then it should return undefined.
 * 
 * @param {Object} -> input the object that you want to search in an array
 * @param {TV Show} => 
 */
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(obj, show) {
  let arr = [];
  for(var ky in obj) {
    if (obj[ky] === show) {
    console.log("key",ky)
    arr.push(ky)
    }
  }
return arr[0];// ask dev to review this🛑🛑🛑
}
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);