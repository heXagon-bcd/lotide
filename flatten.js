/**
 * @param {boolean compare values} testing strings or numbers to see if they match
 * @return {assert pass or fail}
 */

// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if ((actual === expected)) {
//     console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 assertion failed: ${actual} != ${expected}`);
//   }

// };
/**
 * This function will conver all values in array to a single string to see if values match
 * 
 * 
 * @param {*} str1 array that 
 * @param {*} str2 
 * @returns 
 */
// const eqArrays = function(str1, str2) {
//   if (JSON.stringify(str1) === JSON.stringify(str2)) {
//     return true;
//   } else {
//     return false;
//   }
// }


/**WORKING FUNCTION
 * 
 * @returns 
 */
//Create function
const flatten = function(arr) {
  let arr1 = [];
  //Create two loops, one to go through the array, the second to go through the second array
  for (i = 0; i < arr.length; i++) {
      if (typeof arr[i] != "object"){
        arr1.push(arr[i]);
  // if the element is an array, then push out the elemnts of the nested array.
      } else if (typeof arr[i] === "object") {
        for (x = 0; x <arr[i].length; x++ ) {
          arr1.push(arr[i][x]);
        }
      } 
  }
  return arr1;
}

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));

// arr = [1, 2, [3, 4], 5, [6]]
// console.log(arr[0].length)