// const assertEqual = function(actual, expected) {
//   if ((actual === expected)) {
//     console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 assertion failed: ${actual} != ${expected}`);
//   }

// };

const assertEqual = require('./assertEqual')

const tail = function(arr) {
  let a = arr.slice[1]
  return a;
}


const result = tail(["Hello", "Lighthouse", "Labs"]);


assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!