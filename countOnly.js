//function that takes in a collection of items and returns a specific subset of those items.
const countOnly = function(allItems, itemsToCount) {
  const elementCounts = {};
  for (let ky in allItems) {
    const element = allItems[ky];
    elementCounts[element] =  (elementCounts[element] || 0) + 1;
  }
  for (let nm in itemsToCount) {
    if (itemsToCount[nm] ===   false) {
      delete elementCounts[nm];
    }
  }
  return elementCounts;
};

module.exports = countOnly;