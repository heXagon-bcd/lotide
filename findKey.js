// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if ((actual === expected)) {
//     console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 assertion failed: ${actual} != ${expected}`);
//   }

// };

/**
 * Implement the function findKey which takes in an object and a callback. It should scan the object and
 * return the first key for which the callback returns a truthy value. If no key is found, then it should return
 * undefined.
 * 
 */

const findKey = function(object, callback) {

for(i = 0; i < Object.keys(object).length; i++) {
  let key = Object.keys(object)[i];
  console.log("a", key);
  console.log("b", object[key]);
  if(callback(object[key])) { //
   // key.push[Object.keys(object)[i]];// review mistake
   return key
  }
}
return undefined; //if no key is found, then return undefined
}

module.exports = findKey;

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 } 
// }, x => x.stars=== 2)) // => "noma" // x.stars === callback truthy



// try to solve with pseudo code
// dont create variables that we dont need
// research of objects ==> javascript fundamentals
// redo as for in

// key = {
// "Blue Hill": { stars: 1 },
// "Akaleri":   { stars: 3 },
// "noma":      { stars: 2 },
// "elBulli":   { stars: 3 },
// "Ora":       { stars: 2 },
// "Akelarre":  { stars: 3 }
// }

// console.log(key['noma']['stars'])


// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false
// };
// console.log(Object.keys(object1).length);
// //expected result 3

// console.log(Object.keys(object1)[0]);
// // Expected output: Array ["a"]

// const funct = function(obj) {
//   for (i = 0; i < Object.keys(obj).length; i++) {
//     console.log(Object.keys(obj)[i]);
//   }
// }

// funct(object1);
