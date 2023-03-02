/**
 * @param {boolean compare values} testing strings or numbers to see if they match
 * @return {assert pass or fail}
 */

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed: ${actual} != ${expected}`);
  }

};
/**
 * This function will conver all values in array to a single string to see if values match
 * 
 * 
 * @param {*} str1 array that 
 * @param {*} str2 
 * @returns 
 */
const eqArrays = function(str1, str2) {
  if (JSON.stringify(str1) === JSON.stringify(str2)) {
    return true;
  } else {
    return false;
  }
}

// ACTUAL FUNCTION
const middle = function(array) {
  // identify the total length of string
  let arr1 = array.length;
  // find the middle number
  let midNum = array.length / 2;
  // if there is a no remainder return array value with middle string
  if (array.length % 2 != 0) {
    return [array[Math.floor(midNum)]];
  } else if (array.length % 2 === 0) {
    return array.slice(Math.floor(midNum)-1, Math.ceil(midNum)+1);
  }
  //if there is a middle number take the floor and ceil of the string
}

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(eqArrays(middle([1, 2, 3, 4, 5]), [3]))
console.log(eqArrays(middle([1, 2, 3, 4]), [2, 3]))


console.log([1, 2, 3, 4].slice(1, 3));