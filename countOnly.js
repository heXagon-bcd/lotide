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

const eqArrays = function(str1, str2) {
  if (JSON.stringify(str1) === JSON.stringify(str2)) {
    return true;
  } else {
    return false;
  }
}

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//create object

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
//create two loops, one to go thorugh the items to count, and the other to through the array
const countOnly = function(allItems, itemsToCount) {
  const elementCounts = {};
  for(ky in allItems) {
    const element = firstNames[ky]
    elementCounts[element] =  (elementCounts[element] || 0) + 1;
    console.log("test",elementCounts);
    }
  for(nm in itemsToCount) {
    if (itemsToCount[nm] ===   false) {
      console.log("nm",elementCounts[nm]);
      delete elementCounts[nm];
    }
  }
  return elementCounts
}

console.log(countOnly(firstNames))

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1)
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
//


/*
//ask mentor if this is the best way of doing things
const myArray = ['a', 'b', 'c', 'c', 'b', 'd'];

const elementCounts = {};

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  elementCounts[element] = (elementCounts[element] || 0) + 1; // if the element value exists then add 1 , else 0
}

console.log(elementCounts);
*/

