// const assertEqual = function(actual, expected) {
//   if ((actual === expected)) {
//     console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 assertion failed: ${actual} != ${expected}`);
//   }

// };

const assertEqual = require('./assertEqual');
const head = function(arr) {
  let a = arr[0]
  return a;
}

module.exports = head;

//  assertEqual(head([5,6,7]), 5);
//  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");