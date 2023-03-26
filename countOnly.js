/**
 * This method counts the number of occurances an element is the same value and outputs an object key: value
 * @param {array} input numbers/strings
 * @return {object} retuns object of occurances
 * EXAMPLE
 * const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
 * const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
 * assertEqual(result1["Jason"], 1);
 */

const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
//create two loops, one to go thorugh the items to count, and the other to through the array
const countOnly = function(allItems, itemsToCount) {
  const elementCounts = {};
  for (let ky in allItems) {
    const element = firstNames[ky];
    elementCounts[element] =  (elementCounts[element] || 0) + 1;
    console.log("test",elementCounts);
  }
  for (let nm in itemsToCount) {
    if (itemsToCount[nm] ===   false) {
      console.log("nm",elementCounts[nm]);
      delete elementCounts[nm];
    }
  }
  return elementCounts;
};

module.exports = countOnly;